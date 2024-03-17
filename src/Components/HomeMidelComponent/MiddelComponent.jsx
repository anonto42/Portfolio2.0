import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const MiddelComponent = () => {
  return (
    <div className='w-full h-[90%] block md:flex bg-gradient-to-r from-[#552e88] to-[#1c0e2d]'>
        <div className='w-full h-[50%] md:w-[50%] md:h-full md:p-[70px]'>
            <h3 className='right-[35%] absolute mt-10 md:mt-0 md:right-0 text-4xl md:relative md:text-2xl xl:text-4xl text-white'>Hello 👋,</h3>
            <h1 className='right-[18%] sm:right-[23%] text-white absolute mt-[110px] md:right-1 text-7xl md:relative md:text-[50px] md:my-4 md:font-[900] md:text-[#c094f9] xl:text-8xl'>I'm a web <br /> Developer </h1>
            <h3 className='right-[24%] absolute mt-[280px] md:mt-0 md:right-0 text-3xl md:relative  md:text-xl xl:text-2xl text-white'>I build things for web</h3>
            <div className='flex justify-center md:justify-start mt-[520px] text-2xl absolute md:relative text-[#c094f9] w-[100%]  md:mt-7 xl:text-[210%] md:text-[190%]'>
                <div className='w-12 h-12 bg-[#1c0e2d] md:w-[50px] md:h-[50px] flex justify-center items-center rounded-full cursor-pointer xl:w-[60px] xl:h-[60px] '><a href="https://github.com/anonto42"><FaGithub/></a></div>
                <div className='bg-[#1c0e2d] w-12 h-12 mx-10  md:w-[50px] md:h-[50px] flex justify-center items-center rounded-full cursor-pointer xl:w-[60px] xl:h-[60px] md:mx-[10%] xl:mx-[12%] '><a href="https://www.linkedin.com/in/sohidul-islam-ananto/"><FaLinkedin/></a></div>
                <div className='bg-[#1c0e2d] w-12 h-12 md:w-[50px] md:h-[50px] flex justify-center items-center rounded-full cursor-pointer xl:w-[60px] xl:h-[60px]'><a href="https://www.instagram.com/sohidul_islam_ananto/"><FaInstagram/></a></div>
            </div>
        </div>
        <div className='w-full h-[50%] md:w-[50%] md:h-full md:p-[70px]'>
            <div className='imagebar hidden md:block rounded-md w-[220px] h-[150px] border-2 border-indigo-800 md:w-[400px] md:h-[450px] xl:w-[500px]' >
                <img 
                 className='md:w-full rounded-md md:h-full'
                 src="./assets/pp.pn"
                 alt='add some image' />
            </div>
        </div>
    </div>
  )
}

export default MiddelComponent