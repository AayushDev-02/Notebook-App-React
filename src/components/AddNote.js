import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import { useState } from 'react'
const AddNote = () => {
    const context = useContext(noteContext)
    const { addNote } = context;


    const [note, setNote] = useState({ title: "", description: "", tag: "default" })

    const addNoteFunc = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }


    return (

        <div className='max-w-7xl mx-auto mt-20 space-y-10'>

            <h1 className='text-5xl'>Add a new Note</h1>

            <form className='bg-slate-100 p-5'>
                <div className="mb-6">
                    <label htmlFor='title' className="block mb-2 text-lg font-medium text-red-600">Title</label>
                    <input onChange={onChange} type="text" name='title' id="title" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block mb-2 text-lg font-medium text-red-600">Description</label>
                    <input onChange={onChange} type="text" id="description" name='description' className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required />
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                </div>
                <button onClick={addNoteFunc} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Note</button>
            </form>
        </div>
    )
}

export default AddNote
