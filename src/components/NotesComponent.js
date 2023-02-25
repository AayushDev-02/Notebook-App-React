import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote'
import NoteItem from './NoteItem'
const NotesComponent = () => {

  const context = useContext(noteContext)
  const { notes, addNote, deleteNote, editNote } = context;

  return (
    
    <div>
      <AddNote />
      <div className='max-w-7xl mx-auto my-20 text-primary_text'>
        <h2 className='text-4xl my-5'>Your notes</h2>
        <div className='grid grid-cols-4 gap-5'>
          {notes.map((note) => {
            return <NoteItem key={note._id} note={note} addNote={addNote} deleteNote={deleteNote} editNote={editNote} />
          })}
        </div>
      </div>
    </div>
  )
}

export default NotesComponent
