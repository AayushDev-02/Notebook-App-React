import React, { useEffect, useRef } from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import AddNote from './AddNote'
import NoteItem from './NoteItem'
import { useState } from 'react'
const NotesComponent = (props) => {

  const context = useContext(noteContext)
  const { notes, getNotes, editNote } = context;

  const ref = useRef(null);

  const [note, setNote] = useState({id:"", etitle: "", edescription: "", etag: "default" })

  useEffect(() => {
    getNotes()
    // eslint-disable-next-line
  }, [])

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value })
  }

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({id:currentNote._id ,etitle:currentNote.title, edescription:currentNote.description, etag:currentNote.tag});
  }
  const handleClick = (e) => {
    // console.log("updating the note")
    e.preventDefault();
    editNote(note.id, note.etitle, note.edescription, note.etag);
    // addNote(note.title, note.description, note.tag);
    props.showAlert("Updated Successfully");
  }



  return (

    <div>
      <AddNote showAlert={props.showAlert} />
      <button ref={ref} data-modal-target="defaultModal2" data-modal-toggle="defaultModal2" className=" hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        Edit Note
      </button>
      <div id="defaultModal2" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          {/* <!-- Modal content --> */}
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Edit Note
              </h3>
              <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal2">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* <!-- Modal body --> */}
            <div className="p-6 space-y-6">

              <form className='bg-slate-100 p-5'>
                <div className="mb-6">
                  <label htmlFor='etitle' className="block mb-2 text-lg font-medium text-red-600">Title</label>
                  <input onChange={onChange} minLength={5} type="text" name='etitle' id="etitle" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "  value={note.etitle} placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="edescription" className="block mb-2 text-lg font-medium text-red-600">Description</label>
                  <input onChange={onChange} minLength={5} type="text" id="edescription" name='edescription' className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "  value={note.edescription} required />
                </div>
                <div className=" items-start mb-6">

                  <label htmlFor="etag" className="block mb-2 text-lg font-medium text-red-600">Tag</label>
                  <input onChange={onChange}  type="text" id="etag" name='etag' className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "   value={note.etag}  />

                </div>
                <div className='flex space-x-2'>
                <button data-modal-hide="defaultModal2" disabled={note.etitle.length < 5 || note.edescription.length < 5} onClick={handleClick} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Note</button>
                <button data-modal-hide="defaultModal2" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancel</button>
                </div>
              </form>
            </div>
           
          </div>
        </div>
      </div>

      <div className='max-w-full mx-24 my-20 p-5 text-primary_text'>
        <h2 className='text-4xl my-5'>Your notes</h2>
        <div className='flex-wrap flex gap-2 w-fit '>
          {notes.length===0 && 'No notes to display'}
          {notes.map((note) => {
            return <NoteItem key={note._id} updateNote={updateNote} note={note} showAlert={props.showAlert} />
          })}
        </div>
      </div>
    </div>
  )
}

export default NotesComponent
