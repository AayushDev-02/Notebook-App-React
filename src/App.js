import React from 'react'
import {useState} from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import About from './components/About';
import Hero from './components/Hero';
import Alert from './components/Alert';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NotePage from './components/NotePage';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message) =>{
    setAlert({
      msg: message,
    })

    setTimeout(() =>{
      setAlert(null);
    }, 1500)
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>

          <Routes>
            <Route exact path='/' element={<Hero />} />
            <Route exact path='/notepage' element={<NotePage showAlert={showAlert} />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/signup' element={<Signup showAlert={showAlert} />} />
            <Route exact path='/login' element={<Login showAlert={showAlert} />} />
          </Routes>


        </Router>
      </NoteState>

    </>
  );
}

export default App;
