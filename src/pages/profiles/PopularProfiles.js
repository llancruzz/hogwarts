import React from "react";
import appStyles from "../../styles/PopularProfiles.module.css";
import { Container } from "react-bootstrap";

const PopularProfiles = () => {
  return (
    <Container className={appStyles.Post}>
      <p>Most followed profiles.</p>
    </Container>
  );
};

export default PopularProfiles;
