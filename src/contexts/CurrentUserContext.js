import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

/* 
useContext()provides a way to pass through the component tree without having to pass props down manually at every level.
Create and export the CurrentUserContext and setCurrentUserContext by calling the createContext function.
*/
export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  /*
  Add the functionality to  check for the users' logged in status, so that  
  it can display different links in the navbar  depending on if the user is logged in or not. 
  */
  const [currentUser, setCurrentUser] = useState(null);

  /*
  Make a network request to check  who the user is, based on their credentials in the cookie.
  Make a GET  request to the dj-rest-auth/user/ endpoint of API and make it when the component mounts. 
  */
  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  /*
  To have code run when a component mounts, make use of the useEffect hook and pass it an empty dependency array. 
  Call the handleMount function inside. 
  */
  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};
