import React from 'react'

const Skills = () => {
  return (
    <div className='w-full h-[100vh] bg-[#cdcb6e] text-[#8121d0] flex'>
        <div className='w-[50%] h-full p-10 sm:p-20 md:p-[80px]'>
          <div className=' absolute md:relative mt-[440px] md:mt-0 md:block  md:w-full md:h-[70%]'>
            <h1 className='md:text-xl xl:text-3xl font-bold text-[#310d4f]'>About me</h1>
            <p className='font-semibold sm:text-sm md:text-xl xl:text-[20px]'>As a Web Debeloper, I am Responsible for Designig and Developing Web Pages. My Primary focus is to create responsive, User-Friendly experiences That Meet the needs of a diverse online audience.</p>
          </div>
          <div className='w-full h-[30%]'>

          </div>
        </div>
        <div className='md:w-[30%] h-full mr-[15%] sm:mr-[22%] md:p-10'>
          <div className='w-full sm:h-[15%] h-[7%] md:h-[30%]'></div>
          <div className='w-full md:h-[50%]'>
            <h1 className='text-3xl font-bold text-[#310d4f]'>My Skills</h1>
            <p className='my-5 text-xl font-semibold'>Technologies I've been working with recently.</p>
              <div className='flex'>
                <div className='w-[100px] bg-[#3333] flex items-center justify-center mt-5 h-[100px] mr-5'>
                  <img className='w-[70px]' src="./public/assets/js.png" alt="" />
                </div>
                <div className='w-[100px] bg-[#3333] flex items-center justify-center mt-5 h-[100px] mr-5]'>
                  <img className='w-[40px]' src="./public/assets/java.png" alt="" />
                </div>
                <div className='w-[100px] bg-[#3333] flex items-center justify-center mt-5 h-[100px] mx-5'>
                  <img className='w-[70px]' src="./public/assets/react.png" alt="" />
                </div>
              </div>
                <div className='flex'>
                  <div className='w-[100px] bg-[#3333] flex items-center justify-center mt-5 h-[100px]'>
                    <img className='w-[70px]' src="./public/assets/mongo.png" alt="" />
                  </div>
                  <div className='w-[100px] bg-[#3333] flex items-center justify-center mt-5 h-[100px] mx-5'>
                    <img className='w-[60px]' src="./public/assets/redux.png" alt="" />
                  </div>
                  <div className='w-[100px] bg-[#3333] flex items-center justify-center mt-5 h-[100px] mr-5'>
                    <img className='w-[80px]' src="./public/assets/node.png" alt="" />
                  </div>
                </div>
          </div>
        </div>
    </div>
  )
}

export default Skills