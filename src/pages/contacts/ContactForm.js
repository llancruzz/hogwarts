import React, { useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom";

const ContactForm = () => {
  /* 
    Store the values for inputs on Contact Create Form using useState()
    Destructure the useState hook with:
    contactData and setContactData.
    Create variable history and set it to useHistory().
  */
  const [contactData, setContactData] = useState({
    reason_contact: "",
    content: "",
  });
  const { reason_contact, content } = contactData;

  const history = useHistory();

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Please describe the reason for contacting us:</Form.Label>
        <Form.Control type="text" name="reason" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Details:</Form.Label>
        <Form.Control as="textarea" rows={5} name="content" />
      </Form.Group>

      <Button className={btnStyles.Button}>Cancel</Button>
      <Button className={btnStyles.Button} type="submit">
        Send
      </Button>
    </div>
  );

  return (
    <Container>
      <Form>
        <Container className={styles.Container}>{textFields}</Container>
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
