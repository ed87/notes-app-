import React, { useState } from 'react';

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [reminder, setReminder] = useState('');
  const [color, setColor] = useState('#fff');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !body) {
      alert('Please enter both title and body.');
      return;
    }

    const newNote = {
      id: Date.now(),
      title,
      body,
      reminder,
      creationDate: new Date().toLocaleString(),
      color,
    };

    onAddNote(newNote);
    setTitle('');
    setBody('');
    setReminder('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Enter note body"
      />
      <input
        type="text"
        value={reminder}
        onChange={(e) => setReminder(e.target.value)}
        placeholder="Enter reminder (optional)"
      />
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;