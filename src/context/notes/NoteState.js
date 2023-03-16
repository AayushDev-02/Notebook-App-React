
import { useState } from "react";
import NoteContext from "./noteContext";




const NoteState = (props) => {

  const host = "http://localhost:5000";
  const notesInitial = []

  const [notes, setNotes] = useState(notesInitial);


  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')

      }
      // body data type must match "Content-Type" header
    });
    // eslint-disable-next-line
    const json = await response.json();
    // console.log(json)
    setNotes(json)
  }

  //add a note
  const addNote = async (title, description, tag) => {
    //TODO: API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')

      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });

    //client side logic
    // eslint-disable-next-line
    const note = await response.json(); // parses JSON response into native JavaScript objects

    setNotes(notes.concat(note));

   
  }

  //delete a note
  const deleteNote = async (id) => {

    //server side logic
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')

      }
    });
    
    // eslint-disable-next-line
    const json = await response.json();
    

    // client side logic
    // console.log("Deleting a note" + id);
    const newNotes = notes.filter((note) => { return note._id !== id });
    setNotes(newNotes)
  }
  //edit a note
  const editNote = async (id, title, description, tag) => {
    //TODO: API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem('token')

      },
      body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
    });

    // eslint-disable-next-line
    const json = response.json(); // parses JSON response into native JavaScript objects

    let newNotes = JSON.parse(JSON.stringify(notes));

    //client logic
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index]
      if (element._id === id) {
        newNotes[index].title = title
        newNotes[index].description = description
        newNotes[index].tag = tag
        break;
      }
    }
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>

      {props.children}

    </NoteContext.Provider>
  )
}


export default NoteState;