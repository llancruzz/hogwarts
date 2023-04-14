import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture";
import styles from "../../styles/CommentCreateEditForm.module.css";
import btnStyles from "../../styles/Button.module.css";

const CommentCreateForm = (props) => {
  return (
    <Form className={`mt-2 ${styles.Form}`}>
      <Form.Group>
        <InputGroup>
          <Link>
            <ProfilePicture />
          </Link>
          <Form.Control
            className={styles.Comment}
            placeholder="Say something"
            as="textarea"
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
};

export default CommentCreateForm;
