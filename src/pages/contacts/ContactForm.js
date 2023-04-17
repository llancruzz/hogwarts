import React from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

const ContactForm = () => {
  return (
    <Container>
      <Form>
        <Container className={styles.Container}>TEXT FIELDS</Container>
      </Form>
      <Modal>
        <Modal.Header>
          <Modal.Title>Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thank you for your feedback!</Modal.Body>
        <Modal.Footer>
          <Button className={btnStyles.Button}>Cancel</Button>
          <Button className={btnStyles.Button}>Confirm</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ContactForm;
