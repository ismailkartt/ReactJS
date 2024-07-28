import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

const UseEffect2 = () => {

    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        document.title = `${counter} kere tıklandı`;
    },[counter]);


  return (
    <Container className='d-flex justify-content-center flex-column mt-5'>
            <h1 className='text-center'>{`${counter} kere tıklandı`}</h1>
            <Row className='justify-content-center'>
                {/* Butonun genişliğini doğrudan stil ile ayarlıyoruz */}
                <Col className='d-flex justify-content-center' style={{ maxWidth: '200px' }}>
                    <Button onClick={() => setCounter((counter) => counter + 1)} style={{ width: '100%' }}>
                        Tıkla
                    </Button>
                </Col>
            </Row>
        </Container>
  )
}

export default UseEffect2