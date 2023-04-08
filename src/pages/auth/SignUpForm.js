import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { Form, Button, Col, Container, Alert } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  /* 
    Store the values for inputs on Sign Up Form using useState()
    Destructure the useState hook with:
    signUpData and setSignUpData.
    Create variable history and set it to useHistory().
  */
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  const { username, password1, password2 } = signUpData;

  /*
  Store all the erros using useState() to be display to the users. 
  */
  const [errors, setErrors] = useState({});

  const history = useHistory();

  /*
  Handle function to be able to type on form fields.
  Call setSignUpData and spread the signUpData.
  Create a key value  pair, with the key being the input field name,  
  and the value being the value entered by the user.
  Call the useHistory hook to redirect to the sigin page.
  */
  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      /* KEY | VALUE */
      [event.target.name]: event.target.value,
    });
  };

  /*
  Form submit handler:
  Call preventDefault so that the page doesn't refresh.
  Create async function: inside a try-catch block, post all the signUpData
  to the endpoint in API application for user registration.
  */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Col className="my-auto py-2 p-md-2">
      <Container className={`${styles.Container} p-4 `}>
        <h1 className={styles.Header}>sign up</h1>

        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="username">
            <Form.Label className="d-none">Username</Form.Label>
            <Form.Control
              className={styles.Input}
              type="text"
              placeholder="Username"
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
          {/* Add alert bootstrap to display any error of password1 fields */}
          {errors.password1?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
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
          {/* Add alert bootstrap to display any error of password2 fields */}
          {errors.password2?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
          <Button
            className={`${btnStyles.Button} ${btnStyles.Wide}`}
            type="submit"
          >
            Sign up
          </Button>
          {/* 
            Add alert bootstrap for the so-called non-field-errors, such as when the passwords don’t match. 
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
        <Link className={styles.Link} to="/signin">
          Already have an account? <span>Sign in</span>
        </Link>
      </Container>
    </Col>
  );
};

export default SignUpForm;
