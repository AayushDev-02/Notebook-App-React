import React from 'react'
import { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import NotesComponent from './NotesComponent'


const NotePage = () => {

    const context = useContext(noteContext)
    const {notes, setNotes} = context;


    return (
        <div className='w-3/4 mx-auto mt-20 space-y-10'>

            <h1 className='text-5xl'>Add a new Note</h1>

            <form className='bg-slate-100 p-5'>
                <div className="mb-6">
                    <label htmlFor="email" className="block mb-2 text-lg font-medium text-red-600">Your email</label>
                    <input type="email" id="email" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="name@flowbite.com" required />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-lg font-medium text-red-600">Your password</label>
                    <input type="text" id="password" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " required />
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                    </div>
                    <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

            <div>
                <h2 className='text-4xl my-5'>Your notes</h2>
                
                <NotesComponent/>
                
            </div>

        </div>
    )
}

export default NotePage
