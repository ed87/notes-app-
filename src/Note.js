import React from 'react';

const Note = ({ note, onDelete }) => {
  const { title, body, reminder, creationDate, color } = note;

  const handleDelete = () => {
    onDelete(note.id);
  };

  return (
    <div className="note" style={{ backgroundColor: color }}>
      <h3>{title}</h3>
      <p>{body}</p>
      {reminder && <p>Reminder: {reminder}</p>}
      <p>Created on: {creationDate}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Note;
