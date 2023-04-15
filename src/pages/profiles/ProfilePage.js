import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import styles from "../../styles/ProfilePage.module.css";
import btnStyles from "../../styles/Button.module.css";
import PopularProfiles from "./PopularProfiles";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router-dom";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { axiosReq } from "../../api/axiosDefaults";

function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  // Call useCurrentUser() to get the currentUser object
  const currentUser = useCurrentUser();
  // Extract the id from the URL by useParams() to know which profile to fetch.
  const { id } = useParams();
  // Define function to updtade the pageProfile data calling useSetProfileData()
  const setProfileData = useSetProfileData();
  // Access the pageProfile destructuring and call useProfileData()
  const { pageProfile } = useProfileData();
  // Access a single profile object from the results array
  const [profile] = pageProfile.results;
  /*
  Called the useEffect hook to setHasLoaded to true.
  Fetch the post, comments and user profile.
  */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }] = await Promise.all([
          axiosReq.get(`/profiles/${id}`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  // Hold the main profile header.
  const mainProfile = (
    <>
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <p>Image</p>
        </Col>
        <Col lg={6}>
          <h3 className="m-2">Profile username</h3>
          <p>Profile stats</p>
        </Col>
        <Col lg={3} className="text-lg-right">
          <p>Follow button</p>
        </Col>
        <Col className="p-3">Profile content</Col>
      </Row>
    </>
  );
  // Hold the main profile header.
  const mainProfilePosts = (
    <>
      <hr />
      <p className="text-center">Profile owner's posts</p>
      <hr />
    </>
  );

  return (
    <Row className="m-1">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularProfiles mobile />
        <Container className={styles.Background}>
          {hasLoaded ? (
            <>
              {mainProfile}
              {mainProfilePosts}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularProfiles />
      </Col>
    </Row>
  );
}

export default ProfilePage;
