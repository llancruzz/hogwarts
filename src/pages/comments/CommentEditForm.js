import React from "react";
import { Button, Form } from "react-bootstrap";
import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

function CommentEditForm(props) {
  return (
    <Form>
      <Form.Group className="pr-1">
        <Form.Control className={styles.Form} as="textarea" rows={2} />
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
