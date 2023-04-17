import { createContext, useContext, useState, useEffect } from "react";
import { useCurrentUser } from "./CurrentUserContext";
import { axiosReq, axiosRes } from "../api/axiosDefaults";

/* 
useContext()provides a way to pass through the component tree without having to pass props down manually at every level.
Create and export the ProfileDataContext and SetProfileDataContext by calling the createContext function.
*/
export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();

// Create two custom hooks to make accessing currentUser and setCurrentUser.
export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

// Export and define a ProfileDataProvider function component. Pass it children as props.
export const ProfileDataProvider = ({ children }) => {
  // useState hook to store most follwed profiles in the state.
  const [profileData, setProfileData] = useState({
    // pageProfile
    pageProfile: { results: [] },
    popularProfiles: { results: [] },
  });

  const currentUser = useCurrentUser;

  // Handle function to allow user to follow others profiles.
  const handleFollow = async (clickedProfile) => {
    try {
      const { data } = await axiosRes.post("/followers/", {
        followed: clickedProfile.id,
      });

      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: {
          results: prevState.pageProfile.results.map((profile) => {
            return profile.id === clickedProfile.id
              ? // This is the profile I clicked on, update its followers count and set its following id.
                {
                  ...profile,
                  followers_count: profile.followers_count + 1,
                  following_id: data.id,
                }
              : profile.is_owner
              ? // This is the profile of the logged in user update its following count.
                { ...profile, following_count: profile.following_count + 1 }
              : // This is not the profile the user clicled on or the profile the user owns, return it unchanged.
                profile;
          }),
        },
        popularProfiles: {
          ...prevState.popularProfiles,
          results: prevState.popularProfiles.results.map((profile) => {
            return profile.id === clickedProfile.id
              ? // This is the profile I clicked on, update its followers count and set its following id.
                {
                  ...profile,
                  followers_count: profile.followers_count + 1,
                  following_id: data.id,
                }
              : profile.is_owner
              ? // This is the profile of the logged in user update its following count.
                { ...profile, following_count: profile.following_count + 1 }
              : // This is not the profile the user clicled on or the profile the user owns, return it unchanged.
                profile;
          }),
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };

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

  // Add ProfileDataContext.Provider and expose the profileData value.
  // Add SetProfileDataContext.Provider and expose the setProfileData value.
  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider value={{ setProfileData, handleFollow }}>
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};
