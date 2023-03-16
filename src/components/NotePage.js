import React from 'react'

import NotesComponent from './NotesComponent'


const NotePage = (props) => {

    const {showAlert} = props 
    return (
        <div className=''>
            
            <NotesComponent showAlert={showAlert} />

        </div>
    )
}

export default NotePage
