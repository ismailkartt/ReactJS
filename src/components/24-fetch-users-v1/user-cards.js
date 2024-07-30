import React, { useEffect, useState } from 'react';
import Card1 from "./user-card";
import { Col, Container, Row } from 'react-bootstrap';

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data...');
        const response = await fetch('https://66a7412a53c13f22a3cefe4c.mockapi.io/users', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Container>
      <Row className='g-5 mt-5'>
        {data.map((user) => (
          <Col key={user.id} md={6} lg={4} xl={3}>
            <Card1 
              firstName={user.firstName} 
              lastName={user.lastName} 
              avatar={user.avatar} 
              email={user.email} 
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Cards;
