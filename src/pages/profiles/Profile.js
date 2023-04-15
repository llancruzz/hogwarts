import React from "react";
import styles from "../../styles/Profile.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import ProfilePicture from "../../components/ProfilePicture";
import { Link } from "react-router-dom";

const Profile = (props) => {
  // Access the data within the profile obj destructuring data.
  const { profile, mobile, imageSize = 55 } = props;
  const { id, following_id, image, owner } = profile;

  // Check if its username is the same as the profile owner's.
  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <ProfilePicture src={image} height={imageSize} />
        </Link>
      </div>
      <div className={`mx-2 ${styles.WordBreak}`}>
        <strong>{owner}</strong>
      </div>
    </div>
  );
};

export default Profile;
