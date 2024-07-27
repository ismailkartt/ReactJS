import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const PersonCard = ({ image, name, age }) => {
  return (
    <Card>
      <Row>
        <Col md={4}>
          <Card.Img src={require(`./img/${image}`)} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle>{age}</Card.Subtitle>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default PersonCard;
