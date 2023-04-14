import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosRes } from "../../api/axiosDefaults";

// Destructure
function CommentEditForm(props) {
  const { id, content, setShowEditForm, setComments } = props;
  const [formContent, setFormContent] = useState(content);

  // Create handleChange to get value of comments.
  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  /*
  Form submit handler edit comment:
  Call preventDefault so that the page doesn't refresh.
  Create async function: inside a try-catch block, put all the comments
  to the endpoint in API application for user comments id.
  */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/comments/${id}/`, {
        content: formContent.trim(),
      });
      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.map((comment) => {
          return comment.id === id
            ? {
                ...comment,
                content: formContent.trim(),
                updated_at: "now",
              }
            : comment;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          rows={2}
          value={formContent}
          onChange={handleChange}
        />
      </Form.Group>
      <div className="text-right">
        <Button
          className={btnStyles.Button}
          type="button"
          onClick={() => setShowEditForm(false)}
        >
          cancel
        </Button>
        <Button
          className={btnStyles.Button}
          disabled={!content.trim()}
          type="submit"
        >
          save
        </Button>
      </div>
    </Form>
  );
}

export default CommentEditForm;
