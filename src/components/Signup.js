import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiExpress, SiMongodb, SiTailwindcss } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
const Signup = () => {
  return (
    
      <div className='flex-col md:max-w-7xl mx-auto mt-[4rem] p-10 px-10 md:px-20 lg:px-32 font-poppins space-y-2'>
      <div className='flex md:space-x-2 '>
        <img className='md:w-1/2 rounded-xl hidden md:flex' src="../images/sun_img.jpeg" alt="" />
        <form className='py-10 md:w-1/2 w-full px-10 lg:px-20 bg-black flex flex-col items-center justify-center space-y-5 rounded-xl'>
          <h1 className='text-6xl font-bold text-primary_text '>Sign Up</h1>
          <p className='text-secondary_Text text-sm'>Create a new account to store notes</p>
          <div className='space-y-2 w-full'>
            <label className='text-secondary_Text'>Username</label>
            <input className='rounded-full bg-primary_text px-5 py-2 w-full  ' placeholder='Enter username...' type="text" />
          </div>
          <div className='space-y-2 w-full'>
            <label className='text-secondary_Text'>Email</label>
            <input className='rounded-full bg-primary_text px-5 py-2 w-full  ' placeholder='Enter email address...' type="text" />
          </div>
          <div className='space-y-2 w-full'>
            <label className='text-secondary_Text'>Password</label>
            <input className='rounded-full bg-primary_text px-5 py-2 w-full' placeholder='Enter password...' type="password" />
          </div>
          <div><button className='bg-brand font-semibold py-2 px-4 rounded-lg mt-5'>Create</button></div>
        </form>
      </div>
      <div className='bg-black rounded-xl p-5 font-extrabold text-2xl px-10 justify-between text-[#fffed3] flex'>
        <FaReact className=''/>
        <SiMongodb/>
        <SiExpress/>
        <FaNodeJs/>
        <SiTailwindcss/>
      </div>
    </div>
  )
}

export default Signup
