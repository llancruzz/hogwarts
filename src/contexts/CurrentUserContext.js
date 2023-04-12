import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axios from "axios";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useHistory } from "react-router-dom";

/* 
useContext()provides a way to pass through the component tree without having to pass props down manually at every level.
Create and export the CurrentUserContext and setCurrentUserContext by calling the createContext function.
*/
export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

// Create two custom hooks to make accessing currentUser and setCurrentUser.

export const useCurrentUser = () => useContext(CurrentUserContext);
export const useSetCurrentUser = () => useContext(SetCurrentUserContext);

export const CurrentUserProvider = ({ children }) => {
  /*
  Add the functionality to  check for the users' logged in status, so that  
  it can display different links in the navbar  depending on if the user is logged in or not. 
  */
  const [currentUser, setCurrentUser] = useState(null);

  // Redirect the user to the SignIn page if the refresh token fails.
  const history = useHistory();

  /*
  Make a network request to check  who the user is, based on their credentials in the cookie.
  Make a GET  request to the dj-rest-auth/user/ endpoint of API and make it when the component mounts. 
  */
  const handleMount = async () => {
    try {
      const { data } = await axiosRes.get("dj-rest-auth/user/");
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

  /*
  useMemo() hook used here to cache complex values that take time to compute.
  It runs before the childrean components are mounted. Attach the interceptors before the children mount.
  Request interceptor and Response Interceptor.
  */
  useMemo(() => {
    axiosReq.interceptors.request.use(
      async (config) => {
        try {
          await axios.post("/dj-rest-auth/token/refresh/");
        } catch (err) {
          setCurrentUser((prevCurrentUser) => {
            if (prevCurrentUser) {
              history.push("/signin");
            }
            return null;
          });
          return config;
        }
        return config;
      },
      (err) => {
        return Promise.reject(err);
      }
    );
    axiosRes.interceptors.response.use(
      (response) => response,
      async (err) => {
        if (err.response?.status === 401) {
          try {
            await axios.post("/dj-rest-auth/token/refresh/");
          } catch (err) {
            setCurrentUser((prevCurrentUser) => {
              if (prevCurrentUser) {
                history.push("/signin");
              }
              return null;
            });
          }
          return axios(err.config);
        }
        return Promise.reject(err);
      }
    );
  }, [history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        {children}
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
};
