
import { useState } from "react";
import NoteContext from "./noteContext";




const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "63f6559a2f29a2adee0cfa9b",
            "user": "63f62ba0267f6d97e0078225",
            "title": "My Title",
            "description": "Please wake up early in the morning and go to the gym ",
            "tag": "personal",
            "date": "2023-02-22T17:49:14.275Z",
            "__v": 0
        },
        {
            "_id": "63f656bf2f29a2adee0cfaa0",
            "user": "63f62ba0267f6d97e0078225",
            "title": "New Note",
            "description": "Complete the React Course Playlist",
            "tag": "personal",
            "date": "2023-02-22T17:54:07.961Z",
            "__v": 0
        },
        {
            "_id": "63f656bf2f29a2adee0cfaa0",
            "user": "63f62ba0267f6d97e0078225",
            "title": "New Note",
            "description": "Complete the React Course Playlist",
            "tag": "personal",
            "date": "2023-02-22T17:54:07.961Z",
            "__v": 0
        },
        {
            "_id": "63f656bf2f29a2adee0cfaa0",
            "user": "63f62ba0267f6d97e0078225",
            "title": "New Note",
            "description": "Complete the React Course Playlist",
            "tag": "personal",
            "date": "2023-02-22T17:54:07.961Z",
            "__v": 0
        },
        {
            "_id": "63f656bf2f29a2adee0cfaa0",
            "user": "63f62ba0267f6d97e0078225",
            "title": "New Note",
            "description": "Complete the React Course Playlist",
            "tag": "personal",
            "date": "2023-02-22T17:54:07.961Z",
            "__v": 0
        },
    ]

    const [notes, setNotes] = useState(notesInitial);


    return (
        <NoteContext.Provider value={{notes, setNotes}}>

            {props.children}

        </NoteContext.Provider>
    )
}


export default NoteState;