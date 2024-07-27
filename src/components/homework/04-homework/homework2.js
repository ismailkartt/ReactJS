import React, { useState } from "react";
import { Button, ButtonGroup, Col, Container, ProgressBar, Row } from "react-bootstrap";

const HomeWork2 = () => {

    const [progressbar, setProgressbar] = useState(0)

    const calculateProgressBar = (val) => {
        if (val < 0) {
            val = 0;
        }
        if (val > 100) {
            val = 100;
        }
        setProgressbar(val);
    }


  return (
    <Container className="mt-5">
    <Row className="justify-content-md-center">
        <Col md="auto">
            <ButtonGroup aria-label="Basic example">
                <Button variant="primary" onClick={() => calculateProgressBar(progressbar + 10)}>+</Button>
                <Button variant="danger" onClick={() => calculateProgressBar(progressbar - 10)}>-</Button>
            </ButtonGroup>
        </Col>
    </Row>
    <Row className="justify-content-md-center mt-3">
        <Col md="8">
            <ProgressBar now={progressbar} label={`${progressbar}%`} />
        </Col>
    </Row>
</Container>
  );
};

export default HomeWork2;
