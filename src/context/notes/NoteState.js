
import { useState } from "react";
import NoteContext from "./noteContext";




const NoteState = (props) => {

    const host = "http://localhost:5000";
    const notesInitial = [ ]

    const [notes, setNotes] = useState(notesInitial);


    const getNotes = async () => {
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmNjJiYTAyNjdmNmQ5N2UwMDc4MjI1In0sImlhdCI6MTY3NzA4NTIzMH0.ozw979YV7eqWJ-eVXYSX1a7GIgZEgQvecpSdBTZahEM"
              
            }
             // body data type must match "Content-Type" header
          });
        const json = await response.json();
        console.log(json)
        setNotes(json)
    }

    //add a note
    const addNote = async (title, description , tag) => {
        //TODO: API CALL
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmNjJiYTAyNjdmNmQ5N2UwMDc4MjI1In0sImlhdCI6MTY3NzA4NTIzMH0.ozw979YV7eqWJ-eVXYSX1a7GIgZEgQvecpSdBTZahEM"
              
            },
            body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
          });
          
          
          const json =  response.json(); // parses JSON response into native JavaScript objects

        //client side logic
        console.log("Adding a new note")
        const note = {
            "_id": "63f656bf2f29a2adee0cfaa0wawd",
            "user": "63f62ba0267f6d97e007822510",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-02-22T17:54:07.961Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }

    //delete a note
    const deleteNote = async (id) => {
        
        //server side logic
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmNjJiYTAyNjdmNmQ5N2UwMDc4MjI1In0sImlhdCI6MTY3NzA4NTIzMH0.ozw979YV7eqWJ-eVXYSX1a7GIgZEgQvecpSdBTZahEM"
              
            }
          });

        const json = await response.json();
        console.log(json);

        // client side logic
        console.log("Deleting a note" + id);
        const newNotes = notes.filter((note) => {return note._id !== id});
        setNotes(newNotes)
    }
    //edit a note
    const editNote = async (id, title, description, tag) => {
        //TODO: API CALL
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "PUT", // *GET, POST, PUT, DELETE, etc.
            headers: {
              "Content-Type": "application/json",
              "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmNjJiYTAyNjdmNmQ5N2UwMDc4MjI1In0sImlhdCI6MTY3NzA4NTIzMH0.ozw979YV7eqWJ-eVXYSX1a7GIgZEgQvecpSdBTZahEM"
              
            },
            body: JSON.stringify({title, description, tag}), // body data type must match "Content-Type" header
          });
          
          
          const json =  response.json(); // parses JSON response into native JavaScript objects
          
          //client logic
          for(let index = 0; index < notes.length; index++){
              const element = notes[index]
              if(element._id === id){
                  element.title = title
                  element.description = description
                  element.tag = tag
                }
            }
        }

    return (
        <NoteContext.Provider value={{notes, getNotes, addNote, deleteNote, editNote}}>

            {props.children}

        </NoteContext.Provider>
    )
}


export default NoteState;