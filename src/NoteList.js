import React, { useState } from 'react';
import Note from './Note';

const NoteList = ({ notes, onDelete, addNote }) => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [color, setColor] = useState('')

  const handleAddNote = () => {
    addNote(title, body, color)
  }

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', margin: 'auto', width: '70%',}}>
    <div className="note" style={{ backgroundColor: 'grey' }}>
        <input style={{ display: 'block' }} placeholder='title' onChange={(e) => setTitle(e.target.value)} />
        <br/>
        <textarea style={{ display: 'block' }} placeholder='note' onChange={(e) => setBody(e.target.value)} />
        <br/><br/>
        <div>
          Color:  
          <input type='color' onChange={(e)=>setColor(e.target.value)}/>
        </div>
        <br/><br/><br/>
        <button style={{display:'block'}} onClick={()=>handleAddNote()}>Add</button>
    </div>

      {notes.map((note, index) => (
        <Note key={index} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NoteList;
