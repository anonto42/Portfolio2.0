import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full h-[15vh] bg-[#331c52] flex justify-center items-center text-white'>
      <div className='text-2xl xl:text-3xl' >
            <a href="/">
                <span id='hiSpan' className='font-bold'>Apocalypse</span>
            </a>
        </div>
      <div className='flex text-3xl'>
                <div className='ml-8'>
                  <a href="https://github.com/anonto42">
                    <FaGithub/>
                  </a>
                </div>
                <div className='mx-16'>
                  <a href="https://www.linkedin.com/in/sohidul-islam-ananto/">
                    <FaLinkedin/>
                  </a>
                </div>
                <div className=''>
                  <a href="https://www.instagram.com/sohidul_islam_ananto/">
                    <FaInstagram/>
                  </a>
                </div>
            </div>
    </div>
  )
}

export default Footer