import { createContext, useContext } from "react";

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
};

// Add ProfileDataContext.Provider and expose the profileData value.
// Add SetProfileDataContext.Provider and expose the setProfileData value.
return (
  <ProfileDataContext.Provider value={profileData}>
    <SetProfileDataContext.Provider value={setProfileData}>
      {children}
    </SetProfileDataContext.Provider>
  </ProfileDataContext.Provider>
);
