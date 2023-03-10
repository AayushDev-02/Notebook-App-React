import React from 'react'
import { useContext, useRef } from 'react'
import noteContext from '../context/notes/noteContext'
import { useState } from 'react'
import { BsPlus } from 'react-icons/bs'
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


        <div className='mx-24 mt-20 mb-52'>
            <div className='bg-black rounded-t-xl lg:relative'>
                <img className='rounded-t-xl ' src="/images/img_notes.jpg" alt="" />
                <div className=' lg:-mt-16  lg:absolute w-full'>
                    <div className='w-full bg-gradient-to-b from-transparent to-black backdrop-blur-md px-10 py-8 rounded-lg space-y-10'>
                        <h1 className='text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary_text '>Welcome</h1>

                        <button ref={ref} data-modal-target="defaultModal" data-modal-toggle="defaultModal" className=" text-primary items-center justify-center bg-primary_text border-2 flex focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center" type="button">
                            <span className='font-bold'>New Note</span>
                            <BsPlus className=' text-xl font-bold' />

                        </button>
                    </div>
                </div>
            </div>
            <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
                <div className="relative w-full h-full max-w-2xl md:h-auto">
                    {/* <!-- Modal content --> */}
                    <div className="relative rounded-lg shadow-2xl bg-black">
                        {/* <!-- Modal header --> */}
                        <div className="flex items-start justify-between p-4 border-b rounded-t border-secondary">
                            <h3 className="text-xl font-semibold text-primary_text">
                                Add New Note
                            </h3>
                            <button type="button" className="text-secondary_Text bg-transparent hover:bg-brand hover:text-primary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center " data-modal-hide="defaultModal">
                                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-6 space-y-6">

                            <form className='p-4'>
                                <div className="mb-6">
                                    <label htmlFor='title' className="block mb-2 text-lg font-medium text-primary_text">Title</label>
                                    <input onChange={onChange} minLength={5} type="text" name='title' id="title" className="bg-secondary border-none focus:ring-0 text-primary_text text-sm rounded-lg w-full p-2.5 " placeholder="Enter title..." required />
                                </div> 
                                <div className="mb-6">
                                    <label htmlFor="description" className="block mb-2 text-lg font-medium text-primary_text">Description</label>
                                    <textarea onChange={onChange} minLength={5} type="text" id="description" name='description' className="bg-secondary border-none focus:ring-0 text-primary_text text-sm rounded-lg block w-full p-2.5 " placeholder='Enter desc...' required />
                                </div>
                                <div className=" items-start mb-6">

                                    <label htmlFor="tag" className="block mb-2 text-lg font-medium text-primary_text">Tag</label>
                                    <input onChange={onChange} type="text" id="tag" name='tag' className="bg-secondary text-primary_text border-none focus:ring-0 focus:outline-none text-sm rounded-lg block w-full p-2.5 " placeholder='Enter a tag...'  />

                                </div>
                                <button data-modal-hide="defaultModal" disabled={note.title.length < 5 || note.description.length < 5} onClick={addNoteFunc} type="submit" className="text-black bg-brand focus:ring-0 focus:outline-none font-bold  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center ">Add Note</button>
                            </form>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddNote
