import React, { useEffect, useState } from "react";
import appStyles from "../../styles/PopularProfiles.module.css";
import { Container } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import Asset from "../../components/Asset";
import Profile from "./Profile";

const PopularProfiles = ({ mobile }) => {
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
    <Container
      className={`${appStyles.Post} ${mobile && "d-lg-none text-center mb-3"}`}
    >
      {popularProfiles.results.length ? (
        <>
          <p>Most followed profiles.</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularProfiles.results.slice(0, 4).map((profile) => (
                <Profile key={profile.id} profile={profile} mobile />
              ))}
            </div>
          ) : (
            popularProfiles.results.map((profile) => (
              <Profile key={profile.id} profile={profile} />
            ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularProfiles;
