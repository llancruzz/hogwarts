import React, { useEffect, useState } from "react";
import appStyles from "../../styles/PopularProfiles.module.css";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";

const PopularProfiles = () => {
  // useState hook to store most follwed profiles in the state.
  const [profileData, setProfileData] = useState({
    // pageProfile
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });

  const { popularProfiles } = profileData;
  const currentUser = useCurrentUser();

  // Fetch popularProfiles data on mount using the useEffect hook.
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-followers_count"
        );
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [currentUser]);

  return (
    <Container className={appStyles.Post}>
      {popularProfiles.results.length ? (
        <>
          <p>Most followed profiles.</p>
          {popularProfiles.results.map((profile) => (
            <p key={profile.id}>{profile.owner}</p>
          ))}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;
