import React, { useState } from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const UseEffect2 = () => {
    const [count, setCount] = useState(0);

    return (
        <HelmetProvider>
            <Container className='d-flex justify-content-center flex-column'>
                <Helmet>
                    <title>{`${count} kere tıklandı`}</title>
                </Helmet>
                <h1>{`${count} kere tıklandı`}</h1>
                <Row className='justify-content-center'>
                    <Col className='d-flex justify-content-center' style={{ maxWidth: '200px' }}>
                        <Button onClick={() => setCount((count) => count + 1)} style={{ width: '100%' }}>
                            Tıkla
                        </Button>
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
    );
}

export default UseEffect2;
