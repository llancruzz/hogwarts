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
import { useParams } from "react-router-dom";
import { axiosReq } from "../../api/axiosDefaults";

const Houses = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
                <Card.Title>Gryffindor</Card.Title>
              </Badge>

              <Button className={btnStyles.Button} onClick={handleShow}>
                Description
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Gryffindor</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                  <Button className={btnStyles.Button} onClick={handleClose}>
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
              <Button className={btnStyles.Button} onClick={handleShow}>
                Description
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Slytherin</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                  <Button className={btnStyles.Button} onClick={handleClose}>
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
              <Button className={btnStyles.Button} onClick={handleShow}>
                Description
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Ravenclaw</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                  <Button className={btnStyles.Button} onClick={handleClose}>
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
              <Button className={btnStyles.Button} onClick={handleShow}>
                Description
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Hufflepuff</Modal.Title>
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                  <Button className={btnStyles.Button} onClick={handleClose}>
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
