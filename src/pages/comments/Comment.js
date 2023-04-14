import React from "react";
import styles from "../../styles/Comment.module.css";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";

// Create Comment component so that users can display  the comments they created.
const Comment = (props) => {
  const { profile_id, profile_image, owner, updated_at, content } = props;

  /*
  Define a currentUser variable using the useCurrentUser hook exported from the currentUserContexts file.
  Check if the currently logged in user is the owner of a comment.
  */
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

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
        {is_owner && (
          <MoreDropdown handleEdit={() => {}} handleDelete={() => {}} />
        )}
      </Media>
    </>
  );
};

export default Comment;
