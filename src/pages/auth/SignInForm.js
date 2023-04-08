import React from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";

function SignInForm() {
  //   Add your component logic here

  return (
    <Col className="my-auto p-0 p-md-2">
      <Container className={`${styles.Container} p-4 `}>
        <h1 className={styles.Header}>sign in</h1>
        {/*form here */}
      </Container>
      <Container className={`mt-3 ${styles.Container}`}>
        <Link className={styles.Link} to="/signup">
          Don't have an account? <span>Sign up now!</span>
        </Link>
      </Container>
    </Col>
  );
}

export default SignInForm;
