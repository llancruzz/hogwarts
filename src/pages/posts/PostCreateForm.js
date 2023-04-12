import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Upload from "../../assets/upload.png";
import styles from "../../styles/PostCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import Asset from "../../components/Asset";
import { useHistory } from "react-router-dom";

function PostCreateForm() {
  const [errors, setErrors] = useState({});

  /* 
    Store the values for inputs on Post Create Form using useState()
    Destructure the useState hook with:
    postData and setPostData.
    Create variable history and set it to useHistory().
  */
  const [postData, setPostData] = useState({
    title: "",
    house: "",
    content: "",
    image: "",
  });
  const { title, house, content, image } = postData;
  const history = useHistory();

  /*
  Handle function to handle the inputs field's state changes.
  Call setPostData and spread the postData.
  Create a key value  pair, with the key being the input field name,  
  and the value being the value entered by the user.
  Call the useHistory hook to redirect to the post page.
  */
  const handlechange = (event) => {
    setPostData({
      ...postData,
      /* KEY | VALUE */
      [event.target.name]: event.target.value,
    });
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handlechange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>House</Form.Label>
        <Form.Control
          as="select"
          name="house"
          aria-label="house"
          value={house}
          onChange={handlechange}
        >
          <option>Select your House</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="content"
          value={content}
          onChange={handlechange}
        />
      </Form.Group>

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => {}}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              <Form.Label
                className="d-flex justify-content-center"
                htmlFor="image-upload"
              >
                <Asset src={Upload} message="Click to upload an image" />
              </Form.Label>
            </Form.Group>
            <div className="d-md-none">{textFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
          <Container className={`${appStyles.Content}${styles.Container}`}>
            {textFields}
          </Container>
        </Col>
      </Row>
    </Form>
  );
}

export default PostCreateForm;
