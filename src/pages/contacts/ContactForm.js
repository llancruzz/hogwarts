import React, { useEffect, useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import styles from "../../styles/PostCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";
import logo from "../../assets/logo.png";
import stylesImage from "../../styles/Image.module.css";

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

  // Handle errors
  const [errors, setErrors] = useState({});

  // Display alert message
  const [showAlert, setShowAlert] = useState(false);

  const history = useHistory();

  // Create a timer to show alert and close it.
  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
      }, 9000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  const handleButtonSend = () => {
    setShowAlert(true);
  };

  /*
  Handle function to handle the inputs field's state changes.
  Call setContactData and spread the contactData.
  Create a key value  pair, with the key being the input field name,  
  and the value being the value entered by the user.
  */
  const handleChange = (event) => {
    setContactData({
      ...contactData,
      /* KEY | VALUE */
      [event.target.name]: event.target.value,
    });
  };

  /*
  Form submit handler:
  Call preventDefault so that the page doesn't refresh.
  Create async function: inside a try-catch block, post all the formData to the endpoint in API application for user contacts.
  Append all two relevant pieces of data: reason_contact and content.
  */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("reason_contact", reason_contact);
    formData.append("content", content);

    try {
      await axiosReq.post("/contacts/", formData);
      history.push("/contact/create");
    } catch (err) {
      console.log(err);
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };
  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Please describe the reason for contacting us:</Form.Label>
        <Form.Control
          type="text"
          name="reason_contact"
          value={reason_contact}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.reason_contact?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Form.Group>
        <Form.Label>Details:</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button className={btnStyles.Button} onClick={() => history.goBack()}>
        Cancel
      </Button>
      <Button
        className={btnStyles.Button}
        type="submit"
        onClick={handleButtonSend}
      >
        Send
      </Button>
    </div>
  );

  return (
    <Container>
      <Alert show={showAlert} className="">
        <Alert.Heading>Thank you for getting in touch!</Alert.Heading>
        <p>We appreciate you contacting us. Have a great day!</p>
        <hr />
      </Alert>
      <Form onSubmit={handleSubmit}>
        <Container className={styles.Container}>{textFields}</Container>
      </Form>
      <div className={stylesImage.ImageContainer}>
        <img src={logo} className={stylesImage.ImageResponsive} alt="logo" />
      </div>
    </Container>
  );
};

export default ContactForm;
