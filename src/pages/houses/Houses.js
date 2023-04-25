import React, { useEffect, useState } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import styles from "../../styles/Houses.module.css";
import slytherin from "../../assets/slytherin.webp";
import ravenclaw from "../../assets/havenclaw.webp";
import hufflepuff from "../../assets/hufflepuff.webp";
import gryffindor from "../../assets/gryffindor.webp";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useRedirect } from "../../hooks/useRedirect";
import { useParams } from "react-router-dom";

const Houses = () => {
  useRedirect("loggedOut");
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
          axiosReq.get(`/houses/`),
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
          {houseProfile.results.map((houseGr) => (
            <Card className={styles.Card} key={houseGr}>
              <Card.Img variant="top" src={gryffindor} />
              <Card.Body>
                <Badge className={styles.Badge}>
                  <Card.Title>{houseGr.results[2].house_name}</Card.Title>
                </Badge>

                <Button
                  className={btnStyles.Button}
                  onClick={handleGryffindorShow}
                >
                  Description
                </Button>
                <Modal show={showGryffindor} onHide={handleGryffindorClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{houseGr.results[2].house_name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{houseGr.results[2].description}</Modal.Body>
                  <Modal.Footer>
                    <Button
                      className={btnStyles.Button}
                      onClick={handleGryffindorClose}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Card.Text className={`${styles.Badge} pb-2 `}>
                  Points: {houseGr.results[2].current_points}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={3} sm={6}>
          {houseProfile.results.map((houseSy) => (
            <Card className={styles.Card} key={houseSy}>
              <Card.Img variant="top" src={slytherin} />
              <Card.Body>
                <Badge className={styles.Badge}>
                  <Card.Title>{houseSy.results[0].house_name}</Card.Title>
                </Badge>
                <Button
                  className={btnStyles.Button}
                  onClick={handleSlytherinShow}
                >
                  Description
                </Button>
                <Modal show={showSlytherin} onHide={handleSlytherinClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{houseSy.results[0].house_name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{houseSy.results[0].description}</Modal.Body>
                  <Modal.Footer>
                    <Button
                      className={btnStyles.Button}
                      onClick={handleSlytherinClose}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Card.Text className={`${styles.Badge} pb-2 `}>
                  Points: {houseSy.results[0].current_points}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={3} sm={6}>
          {houseProfile.results.map((houseRa) => (
            <Card className={styles.Card} key={houseRa}>
              <Card.Img variant="top" src={ravenclaw} />
              <Card.Body>
                <Badge className={styles.Badge}>
                  <Card.Title>{houseRa.results[1].house_name}</Card.Title>
                </Badge>
                <Button
                  className={btnStyles.Button}
                  onClick={handleRavenclawShow}
                >
                  Description
                </Button>
                <Modal show={showRavenclaw} onHide={handleRavenclawClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{houseRa.results[1].house_name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{houseRa.results[1].description}</Modal.Body>
                  <Modal.Footer>
                    <Button
                      className={btnStyles.Button}
                      onClick={handleRavenclawClose}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Card.Text className={`${styles.Badge} pb-2 `}>
                  Points: {houseRa.results[1].current_points}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
        <Col md={3} sm={6}>
          {houseProfile.results.map((houseHu) => (
            <Card className={styles.Card} key={houseHu}>
              <Card.Img variant="top" src={hufflepuff} />
              <Card.Body>
                <Badge className={styles.Badge}>
                  <Card.Title>{houseHu.results[3].house_name}</Card.Title>
                </Badge>
                <Button
                  className={btnStyles.Button}
                  onClick={handleHufflepuffShow}
                >
                  Description
                </Button>
                <Modal show={showHufflepuff} onHide={handleHufflepuffClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{houseHu.results[3].house_name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>{houseHu.results[3].description}</Modal.Body>
                  <Modal.Footer>
                    <Button
                      className={btnStyles.Button}
                      onClick={handleHufflepuffClose}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Card.Text className={`${styles.Badge} pb-2 `}>
                  Points: {houseHu.results[3].current_points}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Houses;
