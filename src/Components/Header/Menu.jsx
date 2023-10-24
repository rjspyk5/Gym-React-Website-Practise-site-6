import React, { useState } from 'react'
import {FiMenu} from "react-icons/fi"
import {GiCrossMark} from "react-icons/gi"




export const Menu = () => {
const [Click, setClick] = useState(false)
  return (
    <div className='container md:rounded-md md:w-[90%] bg-blue-500 m-auto md:flex' >
      <div className='flex me-auto '>
<h1 className='me-auto m-2 text-white'>Logo</h1>

{
  Click? <GiCrossMark onClick={()=>setClick((pre)=>!pre)} size={30} className='text-white ms-auto md:hidden m-2 hover:cursor-pointer' /> : <FiMenu onClick={()=>setClick((pre)=>!pre)} size={30} className='text-white ms-auto md:hidden m-2 hover:cursor-pointer'/>
  
}
</div>
<div className={`${(Click? "transition-all duration-1000 ease-linear " : "hidden md:inline-block")}  `}  >
<ul className='list-none gap-3 md:flex pt-5 pb-4 md:me-2 md:pt-2 text-white w-[99%] text-center'>
    <li className=' hover:bg-[#5ca0f2] md:hover:bg-transparent md:hover:text-[wheat]'>Home</li>
    <li className=' hover:bg-[#5ca0f2] md:hover:bg-transparent md:hover:text-[wheat]'>Services</li>
    <li className=' hover:bg-[#5ca0f2] md:hover:bg-transparent md:hover:text-[wheat]'>Packages</li>
    <li className=' hover:bg-[#5ca0f2] md:hover:bg-transparent md:hover:text-[wheat]'>About</li>
    <li className=' hover:bg-[#5ca0f2] md:hover:bg-transparent md:hover:text-[wheat]'>Contact</li>
</ul>
</div>



    </div>
  )
}
