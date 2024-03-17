import React from 'react'
import Project from '../../Components/Project_Cart/Project';

const ProjectShow = () => {
  return (
    <div className='w-full h-[80vh]'>
      <div className='w-[90%] text-xl mb-4 p-6'>
        <h1 className=' sm:text-2xl font-bold md:text-3xl'>My Projects</h1>
        <p className='text-sm sm:text-xl'>Some Things I've built so far</p>
      </div>
      <div style={{WebkitOverflowScrolling:'touch'}} className='scroll flex overflow-scroll'>

        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>
        <Project/>

      </div>
    </div>
  )
}

export default ProjectShow