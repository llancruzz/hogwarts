import React, { useEffect, useState } from "react";
import {
  Badge,
  Button,
  Card,
  Col,
  Container,
  Modal,
  Row,
} from "react-bootstrap";
import styles from "../../styles/Houses.module.css";
import gryffindor from "../../assets/gryffindor.webp";
import slytherin from "../../assets/slytherin.webp";
import ravenclaw from "../../assets/havenclaw.webp";
import hufflepuff from "../../assets/hufflepuff.webp";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import { useParams } from "react-router-dom";

const Houses = (props) => {
  useRedirect("loggedOut");
  const { house_name, description, current_points } = props;
  /*
  Create each handle show and close for each house:
  Control the display of each modal independently.
  Prevent issue that opens up all the modals simultaneously with the same title and description.
  */
  const [showGryffindor, setShowGryffindor] = useState(false);
  const [showSlytherin, setShowSlytherin] = useState(false);
  const [showRavenclaw, setShowRavenclaw] = useState(false);
  const [showHufflepuff, setShowHufflepuff] = useState(false);

  const handleGryffindorShow = () => setShowGryffindor(true);
  const handleGryffindorClose = () => setShowGryffindor(false);

  const handleSlytherinShow = () => setShowSlytherin(true);
  const handleSlytherinClose = () => setShowSlytherin(false);

  const handleRavenclawShow = () => setShowRavenclaw(true);
  const handleRavenclawClose = () => setShowRavenclaw(false);

  const handleHufflepuffShow = () => setShowHufflepuff(true);
  const handleHufflepuffClose = () => setShowHufflepuff(false);

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
        const [{ data: houseProfile }] = await Promise.all([
          axiosReq.get(`/houses/${id}`),
        ]);
        setHouseProfile({ results: [houseProfile] });
        console.log(houseProfile);
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <Container className={styles.Container}>
      <Row>
        <Col md={3} sm={6}>
          <Card className={styles.Card}>
            <Card.Img variant="top" src={gryffindor} />
            <Card.Body>
              <Badge className={styles.Badge}>
                <Card.Title>Grinffindor</Card.Title>
              </Badge>

              <Button
                className={btnStyles.Button}
                onClick={handleGryffindorShow}
              >
                Description
              </Button>
              <Modal show={showGryffindor} onHide={handleGryffindorClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Grinffindor</Modal.Title>
                </Modal.Header>
                <Modal.Body>Description</Modal.Body>
                <Modal.Footer>
                  <Button
                    className={btnStyles.Button}
                    onClick={handleGryffindorClose}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              <Card.Text>Current Points</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card className={styles.Card}>
            <Card.Img variant="top" src={slytherin} />
            <Card.Body>
              <Badge className={styles.Badge}>
                <Card.Title>Slytherin</Card.Title>
              </Badge>
              <Button
                className={btnStyles.Button}
                onClick={handleSlytherinShow}
              >
                Description
              </Button>
              <Modal show={showSlytherin} onHide={handleSlytherinClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Slytherin</Modal.Title>
                </Modal.Header>
                <Modal.Body>Description</Modal.Body>
                <Modal.Footer>
                  <Button
                    className={btnStyles.Button}
                    onClick={handleSlytherinClose}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              <Card.Text>Current Points</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card className={styles.Card}>
            <Card.Img variant="top" src={ravenclaw} />
            <Card.Body>
              <Badge className={styles.Badge}>
                <Card.Title>Ravenclaw</Card.Title>
              </Badge>
              <Button
                className={btnStyles.Button}
                onClick={handleRavenclawShow}
              >
                Description
              </Button>
              <Modal show={showRavenclaw} onHide={handleRavenclawClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Ravenclaw</Modal.Title>
                </Modal.Header>
                <Modal.Body>Description</Modal.Body>
                <Modal.Footer>
                  <Button
                    className={btnStyles.Button}
                    onClick={handleRavenclawClose}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              <Card.Text>Current Points</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card className={styles.Card}>
            <Card.Img variant="top" src={hufflepuff} />
            <Card.Body>
              <Badge className={styles.Badge}>
                <Card.Title>Hufflepuff</Card.Title>
              </Badge>
              <Button
                className={btnStyles.Button}
                onClick={handleHufflepuffShow}
              >
                Description
              </Button>
              <Modal show={showHufflepuff} onHide={handleHufflepuffClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Hufflepuff</Modal.Title>
                </Modal.Header>
                <Modal.Body>Description</Modal.Body>
                <Modal.Footer>
                  <Button
                    className={btnStyles.Button}
                    onClick={handleHufflepuffClose}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
              <Card.Text>Current Points</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Houses;
