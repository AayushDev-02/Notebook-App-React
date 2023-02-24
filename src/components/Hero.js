import React from 'react'
import { GiRunningNinja } from 'react-icons/gi'
import { BsShieldFillCheck,BsArrowUpRight } from 'react-icons/bs'
import { FaDollarSign } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='lg:grid lg:grid-cols-3 mx-auto max-w-7xl space-y-10 xl:space-y-0 my-12 sm:my-20 text-primary_text font-poppins leading-relaxed lg:p-0'>
      <div className='lg:col-span-1 space-y-10 px-10 md:px-16 lg:px-0 lg:ml-10 xl:ml-0 '>
        <div className='space-y-10 text-center md:text-left'>
          <h1 className='text-6xl  leading-[4.5rem]'>All your notes Organized. Effortless!</h1>
          <p className='text-secondary_Text'>Inspiration strinkes any where. Notebook lets you capture, organize, edit and save securly your ideas on the cloud.</p>
          <button className='px-6 py-4 rounded-xl bg-primary_text text-primary'><span className='font-bold'>Create a Note</span> - it's free</button>
        </div>

        <div className='w-3/4 mx-auto lg:mx-0 h-1 bg-secondary '></div>

        <div className='space-y-5 px-5 md:px-0 '>
          <p className='text-base text-primary_text/90 sm:text-left text-center'>"Made using MERN Stack power with MongoDB, Express, React, Node.js, and Tailwind CSS"</p>
          <div className='flex space-x-3 items-center justify-center w-fit sm:mx-0 mx-auto'>
            <img className='h-10 w-10 rounded-full' src="../images/aayush.png" alt="" />
            <div className='flex flex-col  justify-center'>
              <h3 className='text-sm'>Aayush Yadav</h3>
              <p className='text-xs text-secondary_Text'>Front end Developer</p>
            </div>
          </div>
        </div>
      </div>

      <div className='col-span-2 grid-rows-4  px-10 justify-end'>
        <div className=' flex xl:ml-20 space-x-1 md:space-x-3'>
          <div className=' w-1/2 grid grid-cols-3 md:gap-3 gap-1 '>

            <div className='col-span-2 bg-black hover:bg-black/30 hover:border-secondary_Text/10 border-transparent border-2  rounded-xl p-3 sm:p-5 space-y-1 md:space-y-2 flex-col'>

              <h2 className='text-xl md:text-2xl text-primary_text'>Fast</h2>
              <p className='text-sm hidden sm:flex text-secondary_Text'>Create and store your important notes in seconds.</p>

            </div>
            <div className='col-span-1 flex items-center justify-center bg-black hover:bg-black/30 hover:border-secondary_Text/10 border-transparent border-2 rounded-xl'>
              <GiRunningNinja className='text-3xl md:text-5xl text-bold text-brand' />
            </div>
            {/* ----------------------------------------- */}
            <div className=' col-span-2 bg-black hover:bg-black/30 hover:border-secondary_Text/10 border-transparent border-2 rounded-xl p-3 sm:p-5 space-y-2 flex-col'>

              <h2 className=' text-xl md:text-2xl text-primary_text'>Secure</h2>
              <p className=' hidden sm:flex sm:text-sm  text-secondary_Text'>Do not worry about your secrets, Notebook will keep them safe and secure.</p>

            </div>
            <div className=' col-span-1 flex items-center justify-center bg-black hover:bg-black/30 hover:border-secondary_Text/10 border-transparent border-2 rounded-xl'>
              <BsShieldFillCheck className='text-2xl md:text-4xl text-bold text-brand' />
            </div>
            {/* ----------------------------------------- */}
            <div className=' col-span-2 bg-black hover:bg-black/30 hover:border-secondary_Text/10 border-transparent border-2 rounded-xl p-3 sm:p-5 space-y-2 flex-col'>

              <h2 className='text-xl md:text-2xl text-primary_text'>Free</h2>
              <p className='text-sm hidden sm:flex text-secondary_Text'>Notebook app is completely free to use!</p>

            </div>
            <div className=' col-span-1 flex items-center justify-center bg-black hover:bg-black/30 hover:border-secondary_Text/10 border-transparent border-2 rounded-xl'>
              <FaDollarSign className='text-3xl md:text-5xl text-bold text-brand' />
            </div>

          </div>
          <div className='w-1/2 space-y-1 md:space-y-3 '>
            <div><img className='rounded-xl border-2 border-transparent hover:border-secondary_Text/10' src="../images/sun_img.jpeg" alt="" /></div>
            <div className='grid-cols-2 grid grid-rows-2 gap-1 md:gap-3'>
              <div className='p-5 bg-black hover:bg-black/30 hover:border-secondary_Text/10 border-transparent border-2 rounded-xl flex items-center justify-center'>Create</div>
              <div className='p-5 bg-black hover:bg-black/30 hover:border-secondary_Text/10 border-transparent border-2 rounded-xl flex items-center justify-center'>Read</div>
              <div className='p-5 bg-black hover:bg-black/30 hover:border-secondary_Text/10 border-transparent border-2 rounded-xl flex items-center justify-center'>Update</div>
              <div className='p-5 bg-black hover:bg-black/30 hover:border-secondary_Text/10 border-transparent border-2 rounded-xl flex items-center justify-center'>Delete</div>

            </div>

          </div>
        </div>
        <div className=' mt-5 flex w-fit mx-auto sm:mx-0 sm:ml-auto  space-x-3'>
          <a href='https://github.com/AayushDev-02' className='px-6 py-2 rounded-xl bg-primary_text text-primary font-bold flex items-center justify-between space-x-2'><span>Github</span> <BsArrowUpRight className='font-bold' /></a>
          <a href='https://www.linkedin.com/in/aayush-yadav-50ab55239/' className='px-6 py-2 rounded-xl bg-primary_text text-primary font-bold flex space-x-2 items-center justify-between'><span>LinkedIn</span> <BsArrowUpRight className='font-bold' /></a>
        </div>

      </div>

    </div>
  )
}

export default Hero
