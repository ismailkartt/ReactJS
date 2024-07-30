import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import UserCard from "./user-card";

const UserCards = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(()=>{
      fetch("https://66a7412a53c13f22a3cefe4c.mockapi.io/users")
      .then((resp) => resp.json())
      .then((data) => {
        setUsers(data);
      })
      .catch(err=>{
        console.log(err);
      })
      .finally(()=>{
        setLoading(false);
      })
    },3000)
      
  }, []);

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      {loading && <Spinner animation="border" variant="primary"/>}
      <Row className="g-4">
        {users.map((user) => (
          <Col key={user.id} sm={6} md={4} lg={3} xl={2}>
            <UserCard {...user} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default UserCards;
