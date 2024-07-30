import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Card1 = ({ firstName, lastName, avatar, email }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={avatar} alt={`${firstName} ${lastName}'s avatar`} />
      <Card.Body>
        <Card.Title>{firstName} {lastName}</Card.Title>
        <Card.Text>
          {email}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Card1;
