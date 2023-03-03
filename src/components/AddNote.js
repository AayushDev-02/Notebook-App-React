import React from 'react'
import { useContext, useRef } from 'react'
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
    const ref = useRef(null);

    return (


        <div className='max-w-7xl mx-auto'>
            <button ref={ref} data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                New Note
            </button>
            <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="relative w-full h-full max-w-2xl md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Add New Note
                            </h3>
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-6 space-y-6">

                            <form className='bg-slate-100 p-5'>
                                <div className="mb-6">
                                    <label htmlFor='title' className="block mb-2 text-lg font-medium text-red-600">Title</label>
                                    <input onChange={onChange} type="text" name='title' id="title" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="name@flowbite.com" required />
                                </div>
                                <div className="mb-6">
                                    <label htmlFor="description" className="block mb-2 text-lg font-medium text-red-600">Description</label>
                                    <input onChange={onChange} type="text" id="description" name='description' className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required />
                                </div>
                                <div className=" items-start mb-6">

                                    <label htmlFor="tag" className="block mb-2 text-lg font-medium text-red-600">Tag</label>
                                    <input onChange={onChange} type="text" id="tag" name='tag' className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required />

                                </div>
                                <button onClick={addNoteFunc} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Note</button>
                            </form>
                        </div>
                        {/* <!-- Modal footer --> */}
                        <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                            <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNote
