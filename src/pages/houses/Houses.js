import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/Houses.module.css"

const Houses = () => {
  return (
    <Container className={styles.Container}>
      <Row>
        <Col md={3} sm={6}>
          <Card>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Gryffindor</Card.Title>
              <Card.Text>This is the content for card 1.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Slytherin</Card.Title>
              <Card.Text>This is the content for card 2.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Ravenclaw</Card.Title>
              <Card.Text>This is the content for card 3.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3} sm={6}>
          <Card>
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>Hufflepuff</Card.Title>
              <Card.Text>This is the content for card 4.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Houses;
