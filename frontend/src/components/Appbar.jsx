import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { GrSun } from "react-icons/gr";
import { useRecoilState } from 'recoil';
import { darkModeState } from '../store/atoms/atom';
const Appbar = () => {
    const [darkMode,setDarkMode] = useRecoilState(darkModeState)
  return (
    <div className={`shadow h-14 flex justify-between ${darkMode?"bg-[#09090b] text-white": "bg-white text-black"}`}>
    <div className="flex flex-col justify-center h-full ml-4">
        LinkShrink
    </div>
    <div className='flex items-center'>
    <button onClick={()=> setDarkMode(!darkMode)}>{darkMode?<GrSun/>:<BsFillMoonStarsFill />}</button>
    </div>
    <div className="flex">
        <div className="flex flex-row justify-center h-full mr-4 items-center">
            <button className='bg-none border-none  p-4 '><a href="https://github.com/Pratham271/Url-shortener-frontend.git" target='_blank' className='flex items-center'>Code &nbsp;<FaGithub/></a></button>
        </div>
        
    </div>
</div>
  )
}

export default Appbar
