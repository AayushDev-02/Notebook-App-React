import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import About from './components/About';
import Hero from './components/Hero';
import Login from './components/Login';
import Navbar from './components/Navbar';
import NotePage from './components/NotePage';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />

          <Routes>
            <Route exact path='/' element={<Hero />} />
            <Route exact path='/notepage' element={<NotePage />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/signup' element={<Signup />} />
            <Route exact path='/login' element={<Login />} />
          </Routes>


        </Router>
      </NoteState>

    </>
  );
}

export default App;
