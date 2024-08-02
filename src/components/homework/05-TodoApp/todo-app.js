import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import NoteForm from './note-form';
import Notes from './notes';

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("");
  const [notes, setNotes] = useState([]);

  const handleInputChange = (e) => { 
    setInputValue(e.target.value);
  };

  const handleAddNote = () => { 
    if(inputValue.trim() !== "") {
      addNote(inputValue);
      setInputValue("");
    }
  };

  const addNote = (note) => {
    setNotes([...notes, { text: note, completed: false }]); // not objesi ekleniyor
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    setNotes(notes.map((note, i) => 
      i === index ? { ...note, completed: !note.completed } : note
    ));
  };

  return (
    <Container>
      <Row>
        <Col>
          <NoteForm 
            inputValue={inputValue} 
            handleInputChange={handleInputChange} 
            handleAddNote={handleAddNote} 
          />
        </Col>
        <Col>
          <Notes notes={notes} onDelete={deleteNote} onToggleComplete={toggleComplete} />
        </Col>
      </Row>
    </Container>
  );
};

export default TodoApp;
