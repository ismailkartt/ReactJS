import React from "react";
import { Button, Container, Form } from "react-bootstrap";

// inputValue, handleInputChange ve handleAddNote prop olarak alınıyor
const NoteForm = ({ inputValue, handleInputChange, handleAddNote }) => {
  return (
    <Container className="mt-5">
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={inputValue} // input alanının değeri olarak inputValue kullanılıyor
            onChange={handleInputChange} // değişim durumunda handleInputChange çağrılıyor
          />
          <Button
            variant="primary"
            className="mt-3"
            onClick={handleAddNote} // tıklama durumunda handleAddNote çağrılıyor
          >
            Create Note
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NoteForm;
