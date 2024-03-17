import React from 'react'

const LastCompOfhome = () => {
  return (
    <div className=' absolute w-full h-[80px] bg-[#291c3a] flex text-white text-xs px-6 items-center'>
        <div className=' hidden sm:flex items-center'>
            <h1 className='mr-2 text-2xl sm:text-4xl'>1</h1>
            <h3 className=''>YEARS OF <br /> EXPRIENCE</h3>
        </div>
        <div className='hidden sm:mx-5 md:mx-7 xl:mx-12 sm:flex items-center'>
            <h1 className='mr-2 text-2xl sm:text-4xl'>12</h1>
            <h3>PROJECTS COMPLETED <br /> AROUND THE WORLD</h3>
        </div>
        <div className='flex w-full justify-around'>
            <img className='w-[40px] h-[50px]' src="./assets/java.png" alt="" />
            <img className='w-[40px] h-[50px]' src="./assets/js.png" alt="" />
            <img className='w-[40px] h-[50px]' src="./assets/react.png" alt="./assets/node.png" />
            <img className='w-[40px] h-[50px]' src="./assets/node.png" alt="" />
            <img className='w-[40px] h-[50px] hidden md:block' src="./assets/redux.png" alt="" />
            <img className='w-[40px] h-[50px] hidden
            md:block' src="./assets/tailwind.png" alt="" />
            <img className='w-[40px] h-[50px]' src="./assets/mongo.png" alt="" />
        </div>
    </div>
  )
}

export default LastCompOfhome