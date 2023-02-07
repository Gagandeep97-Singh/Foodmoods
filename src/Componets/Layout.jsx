import React from 'react'
import banner from '../assits/banner0.png'
import add from '../assits/sandwich.jpg'
import {AiTwotoneFire} from 'react-icons/ai'
const Layout = () => {

  const handlescroll=()=>{
     window.scroll(0,580)
  }

  return (
    <div className="flex w-full m-[2rem] md:flex-row flex-col-reverse gap-5 overflow-hidden">
<div className="flex md:w-[50%] flex-col gap-[1rem] w-full ">
<h1 className="md:text-[3.5rem]  font-bold text-[3rem]">
Let's Start cooking with popular recipes
</h1>
<span className="text-[1rem] md:text-[1.2rem]">
  <p>want to learn cooking but confused how to start?</p>
  <p>no need to worry again!</p>
</span>
<button className="w-[10rem] h-[2rem]  border-2 border-greenstrong  rounded-tl-[20px] rounded-br-[20px] 
m-auto hover:bg-greenstrong transition
 duration-500 ease-in-out transform "
 onClick={handlescroll}>
  Get Start
</button>
</div>
<div className="md:w-[50%] w-full relative  ">
<img src={banner} alt="banner" className="w-[80%] " />
<div className="w-[10rem] h-[7rem] absolute md:top-[90%] top-[6%] md:left-0  bg-firstwhite shadow-xl p-[4px] rounded-md">
<span className="flex">
 <img src={add} alt="add"  className="rounded-[50px] w-[3rem] h-[3rem]"/>
 <span>
 <h6 >Egg sandwich</h6>
 <span className="flex">
  <h3 className="text-[orange] text-2xl">
  < AiTwotoneFire/>
  </h3>
  5.96</span>
 </span>
</span>
 <span className="flex">
  bread,eggs,yellow cheese,alfase,organo
 </span>
</div>
</div>
    </div>
  )
}

export default Layout