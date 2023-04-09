import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import { useState } from "react";
import axios from "axios";

function App() {
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
      const { data } = await axios.get("dj-rest-auth/user/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route render={() => <p>Page Not Fond!</p>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
