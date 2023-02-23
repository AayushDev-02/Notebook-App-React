import React from 'react'
import { GiRunningNinja } from 'react-icons/gi'
import { BsShieldFillCheck,BsArrowUpRight } from 'react-icons/bs'
import { FaDollarSign } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='grid grid-cols-3 mx-auto max-w-7xl my-20 text-primary_text font-poppins leading-relaxed'>
      <div className='col-span-1 space-y-10'>
        <div className='space-y-10'>
          <h1 className='text-6xl  leading-[4.5rem]'>All your notes Organized. Effortless,</h1>
          <p className='text-secondary_Text'>Inspiration strinkes any where. Notebook lets you capture, organize, edit and save securly your ideas on the cloud.</p>
          <button className='px-6 py-4 rounded-xl bg-primary_text text-primary'><span className='font-bold'>Create a Note</span> - it's free</button>
        </div>

        <div className='w-3/4 h-1 bg-secondary '></div>

        <div className='space-y-5'>
          <p className='text-base text-primary_text/90'>"Made using MERN Stack power with MongoDB, Express, React, Node.js, and Tailwind CSS"</p>
          <div className='flex space-x-3 items-center justify-center w-fit'>
            <img className='h-10 w-10 rounded-full' src="../images/aayush.png" alt="" />
            <div className='flex flex-col  justify-center'>
              <h3 className='text-sm'>Aayush Yadav</h3>
              <p className='text-xs text-secondary_Text'>Front end Developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className='col-span-2 grid-rows-4  px-10 justify-end'>
        <div className=' flex ml-20 space-x-3'>
          <div className=' w-1/2 grid grid-cols-3 gap-3'>

            <div className='col-span-2 bg-black rounded-xl p-5 space-y-2 flex-col'>

              <h2 className='text-2xl text-primary_text'>Fast</h2>
              <p className='text-sm text-secondary_Text'>Create and store your important notes in seconds.</p>

            </div>
            <div className='col-span-1 flex items-center justify-center bg-black rounded-xl'>
              <GiRunningNinja className='text-5xl text-bold text-brand' />
            </div>
            {/* ----------------------------------------- */}
            <div className=' col-span-2 bg-black rounded-xl p-5 space-y-2 flex-col'>

              <h2 className='text-2xl text-primary_text'>Secure</h2>
              <p className='text-sm text-secondary_Text'>Do not worry about your secrets, Notebook will keep them safe and secure.</p>

            </div>
            <div className=' col-span-1 flex items-center justify-center bg-black rounded-xl'>
              <BsShieldFillCheck className='text-4xl text-bold text-brand' />
            </div>
            {/* ----------------------------------------- */}
            <div className=' col-span-2 bg-black rounded-xl p-5 space-y-2 flex-col'>

              <h2 className='text-2xl text-primary_text'>Free</h2>
              <p className='text-sm text-secondary_Text'>Notebook app is completely free to use!</p>

            </div>
            <div className=' col-span-1 flex items-center justify-center bg-black rounded-xl'>
              <FaDollarSign className='text-5xl text-bold text-brand' />
            </div>

          </div>
          <div className='w-1/2 space-y-3 '>
            <div><img className='rounded-xl' src="../images/sun_img.jpeg" alt="" /></div>
            <div className='grid-cols-2 grid grid-rows-2 gap-3'>
              <div className='p-5 bg-black rounded-xl flex items-center justify-center'>Create</div>
              <div className='p-5 bg-black rounded-xl flex items-center justify-center'>Read</div>
              <div className='p-5 bg-black rounded-xl flex items-center justify-center'>Update</div>
              <div className='p-5 bg-black rounded-xl flex items-center justify-center'>Delete</div>

            </div>

          </div>
        </div>
        <div className=' mt-5 flex w-fit ml-auto space-x-3'>
          <a href='https://github.com/AayushDev-02' className='px-6 py-2 rounded-xl bg-primary_text text-primary font-bold flex items-center justify-between space-x-2'><span>Github</span> <BsArrowUpRight className='font-bold' /></a>
          <a href='https://www.linkedin.com/in/aayush-yadav-50ab55239/' className='px-6 py-2 rounded-xl bg-primary_text text-primary font-bold flex space-x-2 items-center justify-between'><span>LinkedIn</span> <BsArrowUpRight className='font-bold' /></a>
        </div>

      </div>

    </div>
  )
}

export default Hero
