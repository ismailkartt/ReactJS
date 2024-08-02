import React from 'react';
import Note from './note';

const Notes = ({ notes, onDelete, onToggleComplete }) => {
  return (
    <div>
      {notes.map((note, index) => (
        <Note 
          key={index} 
          note={note} 
          index={index} 
          onDelete={onDelete} 
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default Notes;
