import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const MiddelComponent = () => {
  return (
    <div className='w-full h-[79.8%] flex bg-gradient-to-r from-[#552e88] to-[#1c0e2d]'>
        <div className='md:w-[50%] md:h-full md:p-[70px]'>
            <h3 className='md:text-xl xl:text-2xl md:text-white'>Hello 👋,</h3>
            <h1 className='md:text-[50px] md:my-4 md:font-[900] md:text-[#c094f9] xl:text-8xl'>I'm a web <br /> Developer </h1>
            <h3 className='md:text-xl xl:text-2xl md:text-white'>I build things for web</h3>
            <div className='md:flex md:text-[#c094f9] md:w-[100%]  md:mt-7 xl:text-[210%] md:text-[190%]'>
                <div className='md:bg-[#1c0e2d] md:w-[50px] md:h-[50px] md:flex md:justify-center md:items-center md:rounded-full cursor-pointer xl:w-[60px] xl:h-[60px] '><FaGithub/></div>
                <div className='md:bg-[#1c0e2d] md:w-[50px] md:h-[50px] md:flex md:justify-center md:items-center md:rounded-full cursor-pointer xl:w-[60px] xl:h-[60px] md:mx-[10%] xl:mx-[12%] '><FaLinkedin/></div>
                <div className='md:bg-[#1c0e2d] md:w-[50px] md:h-[50px] md:flex md:justify-center md:items-center md:rounded-full cursor-pointer xl:w-[60px] xl:h-[60px] '><FaInstagram/></div>
            </div>
        </div>
        <div className='md:w-[50%] md:h-full md:p-[70px]'>
            <div className='imagebar md:border-2 md:border-indigo-800 md:w-[400px] md:h-[450px] xl:w-[500px]' >
                <img className='md:w-full md:h-full'      src="" alt='add some image' />
            </div>
        </div>
    </div>
  )
}

export default MiddelComponent