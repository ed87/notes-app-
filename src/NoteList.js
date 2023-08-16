import React from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NoteList;
