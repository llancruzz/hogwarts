import React from "react";
import styles from "../styles/ProfilePicture.module.css";

const ProfilePicture = ({ src, height = 45, text }) => {
  return (
    <span>
      <img
        className={styles.ProfilePicture}
        src={src}
        height={height}
        width={height}
        alt="avatar"
      />
      {text}
    </span>
  );
};

export default ProfilePicture;
