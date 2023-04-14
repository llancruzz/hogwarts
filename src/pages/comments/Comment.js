import React from "react";
import styles from "../../styles/Comment.module.css";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture";

const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_at, content } = props;

  return (
    <>
      <hr />

      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <ProfilePicture src={profile_image} />
        </Link>
        <Media.Body>
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>{content}</p>
        </Media.Body>
      </Media>
    </>
  );
};

export default Comment;
