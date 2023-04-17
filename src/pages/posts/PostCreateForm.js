import React, { useRef, useState } from "react";
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
import { Alert, Image } from "react-bootstrap";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";

function PostCreateForm() {
  const [errors, setErrors] = useState({});
  // Redirect users away from this page if they are already logged out.
  useRedirect("loggedOut");
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

  // Call the useHistory hook to redirect to the user's post page.
  const history = useHistory();

  // Use and import the useRef hook to declare a new imageInput variable, and set it’s initial value to null.
  const imageInput = useRef(null);

  /*
  Handle function to handle the inputs field's state changes.
  Call setPostData and spread the postData.
  Create a key value  pair, with the key being the input field name,  
  and the value being the value entered by the user.
  */
  const handlechange = (event) => {
    setPostData({
      ...postData,
      /* KEY | VALUE */
      [event.target.name]: event.target.value,
    });
  };

  /*
  Handlle change image function:
  Check if the user has chosen a file to upload by checking if there is a file in the files array. 
  Call the setPostData function,  spread our postData, and then set the image attribute’s value using 
  URL.createObjectURL and pass it the file in the files array. URL.createObjectURL creates a local  link to the file passed into it.  
  Access the files array on event.target and choose the first one.
  URL.revokeObjectURL to clear  the browser's reference to the previous file or if user decides to change  their image file after adding one
  */
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setPostData({
        ...postData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  /*
  Form submit handler:
  Call preventDefault so that the page doesn't refresh.
  Create async function: inside a try-catch block, post all the formData to the endpoint in API application for user posts.
  Append all four relevant pieces of data: title,house,content and image.
  */
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("title", title);
    formData.append("house", house);
    formData.append("content", content);
    formData.append("image", imageInput.current.files[0]);

    try {
      const { data } = await axiosReq.post("/posts/", formData);
      history.push(`/posts/${data.id}`);
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
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handlechange}
        />
      </Form.Group>
      {/* Add alert bootstrap to display any error of empty title fields */}
      {errors.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
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
        {errors.house?.map((message, idx) => (
          <Alert variant="warning" className={appStyles.Alert} key={idx}>
            {message}
          </Alert>
        ))}
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
      {/* Add alert bootstrap to display any error of empty content fields */}
      {errors.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button
        className={`${btnStyles.Button} ${btnStyles.Blue}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
        create
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
          <Container
            className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
          >
            <Form.Group className="text-center">
              {/* Add a ternary to show a preview of user's image if they have chosen one */}
              {image ? (
                <>
                  <figure>
                    <Image className={appStyles.Image} src={image} rounded />
                  </figure>
                  <div>
                    <Form.Label
                      className={`${btnStyles.Button} ${btnStyles.Wide}`}
                      htmlFor="image-upload"
                    >
                      Change the image
                    </Form.Label>
                  </div>
                </>
              ) : (
                <Form.Label
                  className="d-flex justify-content-center"
                  htmlFor="image-upload"
                >
                  <Asset src={Upload} message="Click to upload an image" />
                </Form.Label>
              )}

              <Form.File
                id="image-upload"
                accept="image/*"
                onChange={handleChangeImage}
                ref={imageInput}
              />
            </Form.Group>
            {/* Add alert bootstrap to display any error of empty image fields */}
            {errors.image?.map((message, idx) => (
              <Alert variant="danger" key={idx}>
                {message}
              </Alert>
            ))}
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
