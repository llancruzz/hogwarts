import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

import { Form, Button, Col, Container } from "react-bootstrap";

const SignUpForm = () => {
  return (
    <Col className="my-auto py-2 p-md-2">
      <Container className={`${styles.Container} p-4 `}>
        <h1 className={styles.Header}>sign up</h1>

        {/* form here */}
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
