import React from 'react'
import { useState } from 'react'
import { FaReact } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
const Signup = () => {

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  })

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = credentials;

    const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
      // body data type must match "Content-Type" header
    });
    const json = await response.json();
    console.log(json);

    // save the auth token and redirect redirect
    localStorage.setItem("authToken", json.authToken);
    navigate("/notepage");



  }

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }


  return (

    <div className='flex-col md:max-w-7xl mx-auto mt-[4rem] p-10 px-10 md:px-20 lg:px-32 font-poppins space-y-2'>
      <div className='flex md:space-x-2 '>
        <img className='md:w-1/2 rounded-xl hidden md:flex' src="../images/sun_img.jpeg" alt="" />
        <form onSubmit={handleSubmit} className='py-10 md:w-1/2 w-full px-10 lg:px-20 bg-black flex flex-col items-center justify-center space-y-5 rounded-xl'>
          <h1 className='text-6xl font-bold text-primary_text '>Sign Up</h1>
          <p className='text-secondary_Text text-sm'>Create a new account to store notes</p>
          <div className='space-y-2 w-full'>
            <label className='text-secondary_Text' htmlFor='name'>Username</label>
            <input className='rounded-full bg-primary_text px-5 py-2 w-full  ' placeholder='Enter username...' type="text" id='name' name='name' onChange={onChange} required/>
          </div>
          <div className='space-y-2 w-full'>
            <label className='text-secondary_Text' htmlFor='email'>Email</label>
            <input className='rounded-full bg-primary_text px-5 py-2 w-full  ' placeholder='Enter email address...' type="email" id='email' name='email' onChange={onChange} required/>
          </div>
          <div className='space-y-2 w-full'>
            <label className='text-secondary_Text' htmlFor='password'>Password</label>
            <input className='rounded-full bg-primary_text px-5 py-2 w-full' placeholder='Enter password...' type="password" id='password' name='password' onChange={onChange} minLength={5} required />
          </div>
          <div className='space-y-2 w-full'>
            <label htmlFor='cpassword' className='text-secondary_Text'>Confirm Password</label>
            <input className='rounded-full bg-primary_text px-5 py-2 w-full' placeholder='Enter password again...' type="password" id="cpassword" name='cpassword' onChange={onChange} minLength={5} required />
          </div>
          <div><button type='submit' className='bg-brand font-semibold py-2 px-4 rounded-lg mt-5'>Create</button></div>
        </form>
      </div>
      <div className='bg-black rounded-xl p-5 font-extrabold text-2xl px-10 justify-between text-[#fffed3] flex'>
        <FaReact className='' />
        <SiMongodb />
        <SiExpress />
        <FaNodeJs />
        <SiTailwindcss />
      </div>
    </div>
  )
}

export default Signup
