// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NoteList from './NoteList'
import NoteForm from './NoteForm'
function App() {
  const [notes,setNotes] = useState([{
      id:1,
      title:'title 1',
      body:'body text',
      reminder:new Date().toLocaleString(),
      creationDate: new Date().toLocaleString(),
      color:'blue',
    },{
      id: 2,
      title:'title 2',
      body:'body 2',
      reminder:new Date().toLocaleString(),
      creationDate: new Date().toLocaleString(),
      color:'green',
    }])
  const onDelete = (id) => {
   var note= notes.filter((obj) => {
      return obj.id!==id
   })
    setNotes(note)
  }

  const addNote = (title,body,color) => {
    var note={
      title:title,
      body:body,
      color:color,
      reminder:new Date().toLocaleString(),
      creationDate: new Date().toLocaleString(),
    }
    setNotes(prev=>[...prev,note])
    
  }


  return (
   <div style={{height:'100vh', paddingTop:'20px'}}>
        <NoteList addNote={addNote} onDelete={onDelete} notes={notes} />
    </div>
    
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
