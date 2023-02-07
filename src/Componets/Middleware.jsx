import React,{useEffect,useState} from 'react'
import {apidata} from '../config/apis'
import {Link} from 'react-router-dom'
const Middleware = () => {

  const query='salad'

  const [tranding,setTranding]=useState([])

  const fechingdata=async()=>{
    const res= await fetch(apidata(query))
    const data= await res.json();
    const sortdata= data.data.recipes.slice(1,15)
    setTranding(sortdata)
  }


useEffect(()=>{
  fechingdata()
},[])


  return (
    <div className="w-full flex flex-col">
        <h1 className="w-full text-center text-bold text-3xl mt-[2rem]">Popular at Food<span className="text-greenstrong">Mood</span></h1>
        <div className="flex md:flex-col m-[2rem] w-[100%]">
    <div className="w-[90%] overflow-hidden ">
       <div className="w-[300%] animate-marquee flex gap-[2rem]">
{tranding.map(recipe=> <Link to={`/recipe/${recipe.id}`} key={recipe.id} className="md:w-[20%] w-[40%]">
<div className="flex gap-[10px] flex-col text-center items-center">
  <img src={recipe.image_url} alt="img" className="w-[8rem] h-[6rem] rounded-full" />
  <div>
  <h3>{recipe.title}</h3>
  </div>
  </div>
</Link>)}
       </div>
        </div>
        </div>
    </div>
  )
}

export default Middleware