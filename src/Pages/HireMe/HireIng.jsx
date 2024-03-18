import React, { useState } from 'react'
import { IoIosSend } from "react-icons/io";
import { Timestamp, addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import { DB } from '../../FireBase/FireBase';
import { toast } from 'react-toastify';



const HireIng = () => {

    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [wark,setWord] = useState();

    function postData (){
        const userRef = collection(DB,"wark")
        const user = {
            name:name,
            email:email,
            word:wark,
            time:Timestamp.now()
        }
        addDoc(userRef,user)
        console.log("done")
        toast.success("I will Contact you soon!")
        setName("");
        setEmail("");
        setWord("");
    }

  return (
    <div className='w-full h-screen md:flex bg-[#DCCFED]'>
        <div className=' w-[100%] md:w-[50%]  h-[50%] md:h-[100%]'>
            <h1 className='text-xl pt-12 pl-12'>Let's discuss <br /> on something <span style={{color:"#A5117A"}}>cool</span> together</h1>
            <p className='pl-12 pt-2'>I'm interested in ...</p>

            <div className='flex mt-12 ml-10'>
                <div className='w-48 flex justify-center items-center rounded-md hover:border-none hover:bg-slate-600 hover:text-white cursor-pointer mb-2 font-bold border-black h-11 border-2 p-4'>Ecommerce Wesite</div>
                <div className='w-48 mx-4 flex justify-center items-center rounded-md hover:border-none hover:bg-slate-600 hover:text-white cursor-pointer mb-2 font-bold border-black h-11 border-2 '>Saas Website</div>
                <div className='w-48 flex justify-center items-center rounded-md hover:border-none hover:bg-slate-600 hover:text-white cursor-pointer mb-2 font-bold border-black h-11 border-2 '>Landing page</div>
                
            </div>
            <div className='flex ml-10'>
                <div className='w-48 flex justify-center items-center rounded-md hover:border-none hover:bg-slate-600 hover:text-white cursor-pointer mb-2 font-bold border-black h-11 border-2 '>Portfolio</div>
                <div className='w-48 mx-4 flex justify-center items-center rounded-md hover:border-none hover:bg-slate-600 hover:text-white cursor-pointer mb-2 font-bold border-black h-11 border-2 '>Blog Website</div>
                <div className='w-48 flex justify-center items-center rounded-md hover:border-none hover:bg-slate-600 hover:text-white cursor-pointer mb-2 font-bold border-black h-11 border-2 '>Softwears</div>
            </div>

        </div>
        <div className='w-[auto] md:mt-12  md:ml-[60%] absolute left-8 sm:left-[11%]  h-[50%] md:h-[100%]'>
            <input value={name} onChange={ e => setName(e.target.value)} placeholder='Your name' className='px-7 mb-8 border-none w-[100%] outline-none h-11' type="text" name="" id="" /> <br />
            <input value={email} onChange={ e => setEmail(e.target.value)} placeholder='Your email' className='px-7 mb-8 w-[100%] h-11 outline-none' type="text" name="" id="" /> <br />
            <textarea value={wark}  onChange={ e => setWord(e.target.value)} maxLength={300} placeholder='What do you want to do' className='px-7 mb-8 w-[100%] outline-none pt-2' type="text" /> <br />
            <button onClick={()=> postData()} className=' border-2 rounded-md hover:bg-amber-950 hover:text-white hover:border-none text-xl border-rose-700 w-36 h-15 flex justify-center items-center'>
                <IoIosSend className='m-3'/>
                Submit
            </button>
        </div>
    </div>
  )
}

export default HireIng