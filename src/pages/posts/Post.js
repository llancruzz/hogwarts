import React from "react";
import styles from "../../styles/Post.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture";

const Post = (props) => {
  // Destructure props
  const {
    id,
    owner,
    profile_id,
    profile_image,
    comments_count,
    likes_count,
    like_id,
    title,
    content,
    image,
    house,
    updated_at,
    postPage,
  } = props;

  /*
  Define a currentUser variable using the useCurrentUser hook exported from the currentUserContexts file.
  Check if the owner of the post matches the currentUser’s username, and assign the returned boolean value to the is_owner variable.
  */
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Post}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <ProfilePicture src={profile_image} height={80} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && postPage && "..."}
          </div>
        </Media>
      </Card.Body>
    </Card>
  );
};

export default Post;
