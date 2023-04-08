import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import { Form, Button, Col, Container } from "react-bootstrap";

const SignUpForm = () => {
  /* 
    Store the values for inputs on Sign Up Form using useState()
    Destructure the useState hook with:
    signUpData and setSignUpData
    */
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  /*
  Handle function to be able to type on form fields.
  Call setSignUpData and spread the signUpData.
  Creates a key value  pair, with the key being the input field name,  
  and the value being the value entered by the user.
    */
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      /* KEY | VALUE */
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Col className="my-auto py-2 p-md-2">
      <Container className={`${styles.Container} p-4 `}>
        <h1 className={styles.Header}>sign up</h1>

        <Form>
          <Form.Group controlId="username">
            <Form.Label className="d-none">username</Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Username"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="password1">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
              className={styles.Input}
              type="password"
              placeholder="Password"
              name="password1"
              value={password1}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="password2">
            <Form.Label className="d-none">Confirm your password</Form.Label>
            <Form.Control
              className={styles.Input}
              type="password"
              placeholder="Confirm your password"
              name="password2"
              value={password2}
              onChange={handleChange}
            />
          </Form.Group>
          <Button
            className={`${btnStyles.Button} ${btnStyles.Wide}`}
            type="submit"
          >
            Sign up
          </Button>
        </Form>
      </Container>
      <Container className="mt-3">
        <Link className={styles.Link} to="/signin">
          Already have an account? <span>Sign in</span>
        </Link>
      </Container>
    </Col>
  );
};

export default SignUpForm;
