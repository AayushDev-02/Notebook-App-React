import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'

import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'

const NoteItem = (props) => {
    const { note,updateNote } = props;
    const context = useContext(noteContext)
    const {  deleteNote } = context;

    
    return (
        <div className='text-primary_text flex max-h-min max-w-xl font-poppins'>

            <div  className="  w-full p-6 space-y-5 bg-black hover:bg-black/30 hover:border-secondary_Text/10 border-transparent border-2 rounded-lg shadow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{note.description}</p>
                <div className='px-3 py-1 rounded-full bg-brand w-fit text-sm text-primary font-bold'>{note.tag}</div>
                <div className='flex space-x-5 text-xl'>
                    <div onClick={() => {deleteNote(note._id); props.showAlert("Deleted Successfully");}}><AiFillDelete className='hover:text-brand cursor-pointer'  /></div>
                    <div ><MdModeEdit className='hover:text-brand cursor-pointer' onClick={() => {updateNote(note)}}/></div>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
