import React from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { MdModeEdit } from 'react-icons/md'
const NoteItem = (props) => {
    const { note } = props;
    return (
        <div className='text-primary_text flex'>

            <a href="/" className="block max-w-sm p-6 space-y-5 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{note.description}</p>
                <div className='flex space-x-5'>
                    <AiFillDelete />
                    <MdModeEdit />
                </div>
            </a>
        </div>
    )
}

export default NoteItem
