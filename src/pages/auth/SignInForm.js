import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";

function SignInForm() {
  /*
  Access the setCurrentUser function to update user data upon successful sign in.
  Set the setCurrentUser variable to handleSubmit.
  */
  const setCurrentUser = useSetCurrentUser();
  // Redirect users away from this page if they are already logged in.
  useRedirect("loggedIn");

  /* 
    Store the values for inputs on Sign in Form using useState()
    Destructure the useState hook with:
    signInData and setSignInData.
    Create variable history and set it to useHistory().
  */
  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  /*
  Store all the erros using useState() to be display to the users. 
  */
  const [errors, setErrors] = useState({});

  const history = useHistory();

  /*
  Handle function to be able to type on form fields.
  Call setSignInData and spread the signInData.
  Create a key value  pair, with the key being the input field name,  
  and the value being the value entered by the user.
  Call the useHistory hook to redirect to the home page.
  */
  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      /* KEY | VALUE */
      [event.target.name]: event.target.value,
    });
  };

  /*
  Form submit handler:
  Call preventDefault so that the page doesn't refresh.
  Create async function: inside a try-catch block, post all the signInData
  to the endpoint in API application for user login.
  */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      history.goBack();
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Col className="my-auto p-0 p-md-2">
      <Container className={`${styles.Container} p-4 `}>
        <h1 className={styles.Header}>sign in</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label className="d-none">Username</Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Enter your username"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </Form.Group>
          {/* 
            Add Alert bootstrap component to display any  error messages.
            Map over the array  of errors for each key in the error state. 
            Use conditional chaining to check if the username key is in the errors object, and if so, then produce the Alerts.  
            Use that dropdown trick to import this Alert component as we use it. Give the Alert a variant of warning so 
            react-bootstrap will give it a yellow color. And add a key set to index.  Inside our alert, render the error message.
          */}
          {errors.username?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Form.Group controlId="password">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
              className={styles.Input}
              type="password"
              placeholder="Enter your password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Form.Group>
          {/* Add alert bootstrap to display any error of password1 fields */}
          {errors.password?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Button
            className={`${btnStyles.Button} ${btnStyles.Wide}`}
            type="submit"
          >
            Sign in
          </Button>
          {/* 
            Add alert bootstrap for the so-called non-field-errors, such as when the users'username and password don’t match.
            Under the submit  button, add the Alerts for non_field_errors.    
          */}
          {errors.non_field_errors?.map((message, idx) => (
            <Alert variant="warning" key={idx} className="mt-3">
              {message}
            </Alert>
          ))}
        </Form>
      </Container>

      <Container className="mt-3">
        <Link className={styles.Link} to="/signup">
          Don't have an account? <span>Sign up now!</span>
        </Link>
      </Container>
    </Col>
  );
}

export default SignInForm;
