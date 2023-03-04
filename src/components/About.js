
import React from "react"
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { FaBlog, FaLinkedin, FaLinkedinIn, FaUser } from "react-icons/fa"
import { MdMailOutline } from "react-icons/md"

const About = () => {

  return (
    <section className="pt-10 overflow-hidden bg-primary  md:pt-0 sm:pt-16 2xl:pt-16 font-poppins">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold leading-tight text-primary_text sm:text-4xl lg:text-5xl">Hey 👋 I am <br className="block sm:hidden" />Aayush Yadav</h2>
            <p className="max-w-lg mt-3 text-xl leading-relaxed text-secondary_Text md:mt-8">I am a front end web developer from India currently persuing a Bachelors in Computer Science degree. </p>

            <div className="justify-between flex w-3/4 mt-10 text-3xl text-brand">
              <BsGithub/>
              <FaLinkedinIn/>
              <FaUser/>
              <MdMailOutline/>
            </div>
          </div>

          <div className="relative">
            <img className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

            <img className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="/images/aayush_img.png" alt="" />
          </div>
        </div>
      </div>
    </section>

  )
}


export default About
