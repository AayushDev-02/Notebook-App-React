import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';

import Navbar from './components/Navbar';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />

          <Routes>
            <Route exact path='/' element={<Home />} />
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
