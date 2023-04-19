import React from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Houses.module.css";
import gryffindor from "../../assets/gryffindor.webp";
import slytherin from "../../assets/slytherin.webp";
import ravenclaw from "../../assets/havenclaw.webp";
import hufflepuff from "../../assets/hufflepuff.webp";
import btnStyles from "../../styles/Button.module.css";

const Houses = () => {
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

              <Button className={btnStyles.Button}>Description</Button>
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
              <Button className={btnStyles.Button}>Description</Button>
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
              <Button className={btnStyles.Button}>Description</Button>
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
              <Button className={btnStyles.Button}>Description</Button>
              <Card.Text>Current Points</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Houses;
