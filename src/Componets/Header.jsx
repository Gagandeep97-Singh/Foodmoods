import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'

const Header = () => {
  return (
    <div className="w-[100%] mt-[1.5rem] md:mx-[5rem] flex justify-between">
    <span className="pl-[1rem] font-bold text-[1.2rem]">
    Food<span className="text-greenstrong">Mood</span>
    </span>
    <div className="flex relative pr-[3rem] md:mr-[4rem] ">
       <button className="transition duration-500 ease-in-out transform hover:bg-[#4ade80] bg-greenstrong px-[15px] py-[6px] cursor-pointer rounded-[15px] ">Login</button>
    </div>
    </div>
  )
}

export default Header