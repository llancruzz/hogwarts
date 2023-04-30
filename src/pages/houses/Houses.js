import React, { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import styles from "../../styles/Houses.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import { useParams } from "react-router-dom";

const Houses = () => {
  useRedirect("loggedOut");
  /*
  Handle modalId to show and close for each house:
  Control the display of each modal independently.
  Prevent issue that opens up all the modals simultaneously with the same title and description.
  */
  const [modalId, setModalId] = useState("");
  const handleClose = () => setModalId("");

  /*
  Fetch data about the house profile with the id that is in the url. 
  Use and  auto-import the useParams hook and destructure it in place with 
  the name of the parameter that it is set in the route, which is ‘id’.  
  */
  const { id } = useParams();

  /* 
  Destructure the useState hook with:
  houseProfile and setHouseProfile.
  */
  const [houseProfile, setHouseProfile] = useState({ results: [] });

  /*
  Create async function and useEffect to fetch the house profile on mount.
  Make request to the API to get the house profile.
  */
  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/houses/`);
        setHouseProfile(data);
      } catch (err) {
        // console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <Container className={styles.Container}>
      <Row>
        {houseProfile.results.map((house, index) => (
          <Col md={3} sm={6} key={index}>
            <Card className={styles.Card} key={index}>
              <Card.Img
                variant="top"
                src={require(`../../assets/${house.house_name}.webp`).default}
              />
              <Card.Body>
                <Badge className={styles.Badge}>
                  <Card.Title>{house.house_name}</Card.Title>
                </Badge>

                <Button
                  className={btnStyles.Button}
                  onClick={() => setModalId(`modal${index}`)}
                >
                  Description
                </Button>
                <Modal show={modalId === `modal${index}`} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{house.house_name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{house.description}</Modal.Body>
                  <Modal.Footer>
                    <Button className={btnStyles.Button} onClick={handleClose}>
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Card.Text className={`${styles.Badge} pb-2 `}>
                  Points: {house.current_points}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Houses;
