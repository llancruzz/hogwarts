import axios from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const useRedirect = (userAuthStatus) => {
  const history = useHistory();

  /*
  Create async function and useEffect to fetch the token refresh on mount.
  Make request to the API. DEfault axios token/refresh
  Redirect pages if the user is logged in and out to home page.
  */
  useEffect(() => {
    const handleMount = async () => {
      try {
        await axios.post("dj-rest-auth/token/refresh/");
        // Check if user is logged in
        if (userAuthStatus === "loggedIn") {
          history.push("/");
        }
      } catch (err) {
        // Check if user is not logged in
        if (userAuthStatus === "loggedOut") {
          history.push("/");
        }
        console.log(err);
      }
    };
    handleMount();
  }, [history, userAuthStatus]);
};
