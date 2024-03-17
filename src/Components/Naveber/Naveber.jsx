import {React,useState} from 'react'
import { AiTwotoneMail } from "react-icons/ai";
import { FaBarsProgress } from "react-icons/fa6";

const Naveber = () => {
    const [bar,setBar] = useState(false);
    
    function barOnOff (){
        if (bar == false) {
            setBar(true);
            box.classList.add("left-[400px]")
        } else {
            setBar(false);
            box.classList.remove("right-0")
        }
    }
  return (
    <div className="w-full h-[70px] flex justify-between items-center bg-gradient-to-r from-[#8121d0] to-[#331c52] px-14 text-white text-5xl drop-shadow-xl">
        <div className='sm:text-xl md:text-2xl xl:text-3xl' >
            <a href="/">
                <span id='hiSpan' className='font-bold'>Hi</span>
                <span id='devSpan' className="sm:text-[18px] md:text-[22px] xl:text-[28px]">Dev</span>
            </a>
        </div>
        <div className='sm:text-sm md:text-[16px] hidden sm:flex sm:w-[250px] md:w-[350px] xl:w-[450px] xl:font-bold sm:justify-between sm:items-center xl:text-[18px] sm:font-semibold'>
            <a href="/"><h3 className='sm:cursor-pointer my-11 sm:my-0'>Home</h3></a>
            <a href="/about"><h3 className='sm:cursor-pointer my-11 sm:my-0 '>About</h3></a>
            <a href="/skills"><h3 className='sm:cursor-pointer my-11 sm:my-0 '>Skills</h3></a>
            <a href="/projucts"><h3 className='sm:cursor-pointer my-11 sm:my-0 '>Projects</h3></a>
        </div>
        <div className='hidden sm:flex jsm:ustify-between sm:text-xl sm:items-center sm:h-[40px] bg-white text-[#291c3a] sm:px-3 sm:rounded-sm md:rounded-md cursor-pointer'>
            <AiTwotoneMail/>
            <h2 className='ml-2'>Hire me</h2>
        </div>
        <div onClick={()=>barOnOff()} className='sm:hidden cursor-pointer '>
            <FaBarsProgress />
        </div>
        {bar && <div id='box' className='text-[20px] w-[200px] h-auto mt-[370px] rounded-md px-[65px] bg-gradient-to-br from-[#8a10ed] to-[#052c2d] absolute right-0 sm:hidden'>
            <a href="/"><h3 className='sm:cursor-pointer my-11 sm:my-0'>Home</h3></a>
            <a href="/about"><h3 className='sm:cursor-pointer my-11 sm:my-0 '>About</h3></a>
            <a href="/skills"><h3 className='sm:cursor-pointer my-11 sm:my-0 '>Skills</h3></a>
            <a href="/projucts"><h3 className='sm:cursor-pointer my-11 sm:my-0 '>Projects</h3></a>
        </div>}
        
        
    </div>
  )
}

export default Naveber