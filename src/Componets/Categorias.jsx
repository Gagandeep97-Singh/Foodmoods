import React from 'react'
import { FaPizzaSlice } from 'react-icons/fa'
import { GiFireBowl, GiNoodles, GiCakeSlice, GiRiceCooker } from 'react-icons/gi'


export const Category = [

  {
    id: "pizza",
    name: "pizza",
    icon: <FaPizzaSlice />
  },
  {
    id: "curry",
    name: "curry",
    icon: <GiFireBowl />
  },
  {
    id: "noodle",
    name: "noodle",
    icon: <GiNoodles />
  },
  {
    id: "cake",
    name: "cake",
    icon: <GiCakeSlice />
  },
  {
    id: "rice",
    name: "rice",
    icon: <GiRiceCooker />
  }
]


const Categorias = ({setQuery}) => {

  const handleClick=(e)=>{
     setQuery(e.target.name)
     console.log(e.target.name)
     
  }
  return (
    <>
      <div className="flex md:flex-col md:gap-[1rem] gap-[5px] mt-[2rem]">

        {Category?.map((cats) => <button key={cats.id} name={cats.name} className=" capitalize flex md:gap-3  justify-center items-center  
        border-[1px] border-border rounded-2xl p-1
         hover:bg-greenstrong 
         " onClick={handleClick}>
          <span className="bg-firstwhite p-2 rounded-full hidden md:block">{cats.icon}</span>
         {cats.name} 
        </button>)}
      </div>
    </>
  )
}

export default Categorias