import React, { useState } from 'react'
import People from './people.json';
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

const Birthday1 = () => {

  const [mode, setMode] = useState("d-block")


  return (
    <Container className='mt-5 mb-5 g-5'>
    <Row className={`g-3 ${mode}`}>
      {People.map((person) => (
        <Col key={person.id} xs={12} className='d-flex justify-content-center mb-3'>
          <Card style={{ width: '18rem', display: 'flex', alignItems: 'center', flexDirection: 'row', padding: '10px' }}>
            <Card.Img 
              src={require(`./img/${person.image}`)} 
              alt={person.name} 
              className='rounded-circle' 
              style={{ width: '90px', height: '90px', objectFit: 'cover', marginRight: '10px' }}
            />
            <div>
              <Card.Title>{person.name}</Card.Title>
              <Card.Text>
                {person.age}
              </Card.Text>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
    <div className='d-flex justify-content-center g-3'>
    <Button variant="outline-danger" onClick={() => setMode("d-none")}>Temizle</Button>
    </div>
    
  </Container>
  )
}

export default Birthday1