"use client";
import React, { useState } from 'react'

const page = () => {
  const [first, setfirst] = useState()
  return (
    < >
    {/* NAVBAR */}
    <div className="fixed h-fit w-full  bg-gray-600 flex items-center justify-between px-12 py-5 text-white">
      <h1 className=" text-center text-4xl">Medium</h1>
      <div className="flex gap-5 items-center">
        <a href='#'>Our story</a>
        <a href='#'>Membership</a>
        <a href='#'>Write</a>
        <a href='#'>Sign In</a>
        <button className="rounded-full bg-green-400 p-2 text-white hover:bg-green-700 hover:ease-in ">Get Started</button>
      </div>

    </div>
    <hr className=" border-[2px] border-black mb-8 "></hr>

    {/* CONTENT */}
    <div className=' flex gap-[15rem] pt-20 px-12 '>
      {/* LEFT-CONTENT */}

      <div>
      
        {/* CARD-1 */}
        <div className=' flex  gap-5 mb-8'>
         
          <div className=' '> 
            <a className='text-sm'>Matthew Veras Barros in EduCreate</a>
            <h3 className=' font-bold text-xl w-[24rem]'>Language, Dialect, and the Time-Space Continuum</h3>
          </div>
        
          <img className=" bg-cover h-[9rem] w-[13rem] " src='https://miro.medium.com/v2/resize:fill:300:201/1*e3kgNMHXevUcsoK7BwO9yw.png'></img>
      
        </div>
      
        {/* CARD-2 */}
        <div className=' flex  gap-5 mb-8'>
         
          <div className=' '> 
            <a className='text-sm'>Matthew Veras Barros in EduCreate</a>
            <h3 className=' font-bold text-xl w-[24rem]'>Language, Dialect, and the Time-Space Continuum</h3>
          </div>
        
          <img className=" bg-cover h-[9rem] w-[13rem] " src='https://miro.medium.com/v2/resize:fill:300:201/1*e3kgNMHXevUcsoK7BwO9yw.png'></img>
      
        </div>

        {/* CARD-3 */}
        <div className=' flex  gap-5 mb-8'>
         
          <div className=' '> 
            <a className='text-sm'>Matthew Veras Barros in EduCreate</a>
            <h3 className=' font-bold text-xl w-[24rem]'>Language, Dialect, and the Time-Space Continuum</h3>
          </div>
        
          <img className=" bg-cover h-[9rem] w-[13rem] " src='https://miro.medium.com/v2/resize:fill:300:201/1*e3kgNMHXevUcsoK7BwO9yw.png'></img>
      
        </div>
       
        {/* CARD-4 */}
        <div className=' flex  gap-5 mb-8'>
         
          <div className=' '> 
            <a className='text-sm'>Matthew Veras Barros in EduCreate</a>
            <h3 className=' font-bold text-xl w-[24rem]'>Language, Dialect, and the Time-Space Continuum</h3>
          </div>
        
          <img className=" bg-cover h-[9rem] w-[13rem] " src='https://miro.medium.com/v2/resize:fill:300:201/1*e3kgNMHXevUcsoK7BwO9yw.png'></img>
      
        </div>

      </div> 


      {/* RIGHT CONTENT */}
      <div className='pl-5 pr-5 items-center '>
        
        <h3 className=' mb-2 font-semibold text-[1.25rem]'>Discover more of what matters to you</h3>
        <div className='block justify-evenly'>
          <button className=" m-2 rounded-full bg-slate-300 p-2 hover:bg-green-400 hover:ease-in ">Programing </button>
          <button className=" m-2 rounded-full bg-slate-300 p-2 hover:bg-green-400 hover:ease-in ">Data Science</button>
          <button className=" m-2 rounded-full bg-slate-300 p-2 hover:bg-green-400 hover:ease-in ">Tachnology</button>
          <button className=" m-2 rounded-full bg-slate-300 p-2 hover:bg-green-400 hover:ease-in ">Writing</button>
          <button className=" m-2 rounded-full bg-slate-300 p-2 hover:bg-green-400 hover:ease-in ">Self improvement</button>
          <button className=" m-2 rounded-full bg-slate-300 p-2 hover:bg-green-400 hover:ease-in ">Machine learning</button>
          <button className=" m-2 rounded-full bg-slate-300 p-2 hover:bg-green-400 hover:ease-in ">Productivity</button>
        </div>


        <a className='  text-green-400 hover:text-black cursor-pointer'>See more topics</a>


      </div>


    </div>


      
    </>
  )
}

export default page

