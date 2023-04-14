import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

// Destructure
function CommentEditForm(props) {
  const { id, content, setShowEditForm, setComments } = props;
  const [formContent, setFormContent] = useState(content);

  // Create handleChange to get value of comments.
  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  return (
    <Form>
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
        <Button className={btnStyles.Button} type="button">
          cancel
        </Button>
        <Button disabled={!content.trim()} type="submit">
          save
        </Button>
      </div>
    </Form>
  );
}

export default CommentEditForm;
