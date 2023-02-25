
import { useState } from "react";
import NoteContext from "./noteContext";




const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "63f6559a2f29a2adee0cfa9bawd",
            "user": "63f62ba0267f6d97e0078225",
            "title": "My Title",
            "description": "Please wake up early in the morning and go to the gym ",
            "tag": "personal",
            "date": "2023-02-22T17:49:14.275Z",
            "__v": 0
        },
        {
            "_id": "63f656bf2f29a2adee0cfaa0gf",
            "user": "63f62ba0267f6d97e0078225",
            "title": "New Note",
            "description": "Complete the React Course Playlist",
            "tag": "personal",
            "date": "2023-02-22T17:54:07.961Z",
            "__v": 0
        },
        {
            "_id": "63f656bf2f29a2adee0cfaa0c",
            "user": "63f62ba0267f6d97e0078225",
            "title": "New Note",
            "description": "Complete the React Course Playlist",
            "tag": "personal",
            "date": "2023-02-22T17:54:07.961Z",
            "__v": 0
        },
        {
            "_id": "63f656bf2f29a2adee0cfaa0z",
            "user": "63f62ba0267f6d97e0078225",
            "title": "New Note",
            "description": "Complete the React Course Playlist",
            "tag": "personal",
            "date": "2023-02-22T17:54:07.961Z",
            "__v": 0
        },
        {
            "_id": "63f656bf2f29a2adee0cfaa0g",
            "user": "63f62ba0267f6d97e0078225",
            "title": "New Note",
            "description": "Complete the React Course Playlist",
            "tag": "personal",
            "date": "2023-02-22T17:54:07.961Z",
            "__v": 0
        },
        {
            "_id": "63f656bf2f29a2adee0cfaa0a",
            "user": "63f62ba0267f6d97e0078225",
            "title": "New Note",
            "description": "Complete the React Course Playlist",
            "tag": "personal",
            "date": "2023-02-22T17:54:07.961Z",
            "__v": 0
        },
        {
            "_id": "63f656bf2f29a2adee0cfaa0d",
            "user": "63f62ba0267f6d97e0078225",
            "title": "New Note",
            "description": "Complete the React Course Playlist",
            "tag": "personal",
            "date": "2023-02-22T17:54:07.961Z",
            "__v": 0
        },
        {
            "_id": "63f656bf2f29a2adee0cfaa0w",
            "user": "63f62ba0267f6d97e0078225",
            "title": "New Note",
            "description": "Complete the React Course Playlist",
            "tag": "personal",
            "date": "2023-02-22T17:54:07.961Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial);


    //add a note
    const addNote = (title, description , tag) => {
        //TODO: API CALL
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
    const deleteNote = (id) => {
        // setNotes()
    }
    //edit a note
    const editNote = (id) => {

    }

    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>

            {props.children}

        </NoteContext.Provider>
    )
}


export default NoteState;