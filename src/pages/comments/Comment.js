import React, { useState } from "react";
import styles from "../../styles/Comment.module.css";
import Media from "react-bootstrap/Media";
import { Link } from "react-router-dom";
import ProfilePicture from "../../components/ProfilePicture";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { MoreDropdown } from "../../components/MoreDropdown";
import { axiosRes } from "../../api/axiosDefaults";
import CommentEditForm from "./CommentEditForm";

// Create Comment component so that users can display  the comments they created.
const Comment = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    setPost,
    setComments,
  } = props;
  // State to toggle edit form
  const [showEditForm, setShowEditForm] = useState(false);
  /*
  Define a currentUser variable using the useCurrentUser hook exported from the currentUserContexts file.
  Check if the currently logged in user is the owner of a comment.
  */
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  /*
 Handle delete function:
 Make request api axiosRes to comment id to delete it.
 Decrement comments_count by one. Filter out the deleted comment from the array.
 Update both with setPost and setComments.
 */
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/comments/${id}/`);
      setPost((prevPost) => ({
        results: [
          {
            ...prevPost.results[0],
            comments_count: prevPost.results[0].comments_count - 1,
          },
        ],
      }));

      setComments((prevComments) => ({
        ...prevComments,
        results: prevComments.results.filter((comment) => comment.id !== id),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <ProfilePicture src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <CommentEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setComments={setComments}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <MoreDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </>
  );
};

export default Comment;
