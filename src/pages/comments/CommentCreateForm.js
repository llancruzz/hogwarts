import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture";
import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosRes } from "../../api/axiosDefaults";

function CommentCreateForm(props) {
  const { post, setPost, setComments, profileImage, profile_id } = props;
  const [content, setContent] = useState("");

  /*
  Handle function to be able to post on form comment fields.
  Call setContent and get the value input.
  */
  const handleChange = (event) => {
    setContent(event.target.value);
  };

  /*
  Form submit handler:
  Call preventDefault so that the page doesn't refresh.
  Create async function: inside a try-catch block, make request comment
  to the endpoint in API application for user comments.
  */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/comments/", {
        content,
        post,
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: [data, ...prevComments.results],
      }));
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count + 1,
          },
        ],
      }));
      setContent("");
    } catch (err) {
      console.log(err);
    }
  };
}

return (
  <Form className="mt-2" onSubmit={handleSubmit}>
    <Form.Group>
      <InputGroup>
        <Link>
          <ProfilePicture />
        </Link>
        <Form.Control
          className={styles.Comment}
          placeholder="Say something"
          as="textarea"
          value={content}
          onChange={handleChange}
          rows={2}
        />
      </InputGroup>
    </Form.Group>

    <Button
      className={`${btnStyles.Button} btn d-block ml-auto`}
      disabled={!content.trim()}
      type="submit"
    >
      post
    </Button>
  </Form>
);

export default CommentCreateForm;
