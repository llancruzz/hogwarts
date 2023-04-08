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

function SignInForm() {
  /* 
    Store the values for inputs on Sign in Form using useState()
    Destructure the useState hook with:
    signInData and setSignInData.
    Create variable history and set it to useHistory().
  */
  const [signInData, setSignInDate] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const history = useHistory();

  /*
  Handle function to be able to type on form fields.
  Call setSignInData and spread the signInData.
  Create a key value  pair, with the key being the input field name,  
  and the value being the value entered by the user.
  Call the useHistory hook to redirect to the home page.
  */
  const handleChange = (event) => {
    setSignInDate({
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
      await axios.post("/dj-rest-auth/login/", signInData);
      history.push("/")
    } catch (err) {}
  };

  return (
    <Col className="my-auto p-0 p-md-2">
      <Container className={`${styles.Container} p-4 `}>
        <h1 className={styles.Header}>sign in</h1>

        <Form>
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

          <Button
            className={`${btnStyles.Button} ${btnStyles.Wide}`}
            type="submit"
          >
            Sign in
          </Button>
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
