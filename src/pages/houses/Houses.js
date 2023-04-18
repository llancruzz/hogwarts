import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Houses.module.css";
import gryffindor from "../../assets/gryffindor.webp";
import slytherin from "../../assets/slytherin.webp";
import ravenclaw from "../../assets/havenclaw.webp";
import hufflepuff from "../../assets/hufflepuff.webp";
import hogwartsAll from "../../assets/hogwartscrest.webp";
import stylesImage from "../../styles/Image.module.css"

const Houses = () => {
  return (
    <Container className={styles.Container}>
      <Row>
        <Col md={3} sm={6}>
          <Card>
            <Card.Img variant="top" src={gryffindor} />
            <Card.Body>
              <Card.Title>Gryffindor</Card.Title>
              <Card.Text>This is the content for card 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card>
            <Card.Img variant="top" src={slytherin} />
            <Card.Body>
              <Card.Title>Slytherin</Card.Title>
              <Card.Text>This is the content for card 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card>
            <Card.Img variant="top" src={ravenclaw} />
            <Card.Body>
              <Card.Title>Ravenclaw</Card.Title>
              <Card.Text>This is the content for card 3.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card>
            <Card.Img variant="top" src={hufflepuff} />
            <Card.Body>
              <Card.Title>Hufflepuff</Card.Title>
              <Card.Text>This is the content for card 4.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <div className={stylesImage.ImageContainer}>
        <img
          src={hogwartsAll}
          className={stylesImage.ImageResponsive}
          alt="hogwarts all houses"
        />
      </div>
    </Container>
  );
};

export default Houses;
