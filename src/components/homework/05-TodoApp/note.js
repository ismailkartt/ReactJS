import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { FaTrash } from "react-icons/fa";

const Note = ({ note, index, onDelete, onToggleComplete }) => {
  return (
    <Card 
      border="secondary" 
      className="mt-3" 
      style={{ width: "18rem", backgroundColor: note.completed ? "green" : "white" }}
    >
      <Card.Header>{note.text}</Card.Header>
      <Card.Body>
        <div className="d-flex justify-content-around align-items-center">
          <Form.Check 
            type="checkbox" 
            checked={note.completed} 
            onChange={() => onToggleComplete(index)} 
          />
          <Button variant="link" onClick={() => onDelete(index)}>
            <FaTrash color="red" />
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Note;
