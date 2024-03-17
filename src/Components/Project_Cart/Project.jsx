import React from 'react'
import { CiLink } from 'react-icons/ci'
import { FaGithub } from 'react-icons/fa'

const Project = () => {
  return (
    <div>
        <div className='w-[330px] text-white rounded-md pt-1 ml-7 sm:ml-12 h-[420px] bg-gray-700'>
          <div className='w-[90%] h-[50%] overflow-hidden border m-4 rounded-md'>
            <img className='w-full h-full' src="" alt="" />
          </div>
          <div className='ml-5'>
            <h1 className='text-xl font-bold mb-2'> TITEL OF THE PROJECT</h1>
            <p className='mb-5'>Sort description of this projects</p>
            <div className='w-[90%] h-9 rounded-2xl flex justify-center items-center bg-[#331c52] mb-3'>
              <a href="" className='flex justify-center items-center'> 
                <FaGithub className='mr-3'/>
                View Code
              </a>
            </div>
            <div className='w-[90%] h-9 rounded-2xl flex justify-center items-center bg-[#331c52]'>
              <a href="" className='flex justify-center items-center'>
                <CiLink className='text-xl  justify-center items-center mr-3'/>
                Live Link
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Project