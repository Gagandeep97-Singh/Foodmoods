import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import {singleRecipeData} from '../config/apis'
import {AiOutlineClockCircle,AiOutlineMinusCircle,AiOutlinePlusCircle} from 'react-icons/ai'
import {BsPeople,BsCheckAll,BsArrowRight} from 'react-icons/bs'
import {Link} from 'react-router-dom'



const Recipedetails = () => {

    const {id}=useParams();
console.log(id)
const [singleRecipe,setSingleRecipe]=useState();

const fetchingSingleRecipe=async()=>{
  try{
    const res= await fetch(singleRecipeData(id));
  const data= await res.json();
 setSingleRecipe(data.data.recipe)
 
  }
  catch (error) {
    console.error('An error occurred:', error);
  }
  
}

useEffect(()=>{
  fetchingSingleRecipe()
  
},[])
 console.log(singleRecipe)

  return (
    <>
    
    <div className="flex w-full md:flex-row flex-col bg-white">
         <div className="flex flex-col md:w-[50%] w-full gap-[2rem] ">
        <div className="relative">
        <img src={singleRecipe?.image_url} alt="recipe_img" className="md:w-[100%] w-full md:h-[50vh] h-[30vh] rounded-2xl" />
     <h1 className="absolute left-[30%] bottom-0 text-firstwhite md:text-[2rem] text-[1rem] font-heading uppercase w-[50%] text-center leading-[2.5rem]">
      <span className="bg-gradient-to-r from-green to-greenstrong ">
      {singleRecipe?.title}
        </span></h1>
            </div>

            <div className="flex md:gap-[2rem] md:mx-[2rem] gap-[1rem] mx-[1rem]">
        <div className="flex gap-[1rem]">
          <span className="text-greenstrong text-[2rem]">
            <AiOutlineClockCircle/>
          </span>
          <h3>{singleRecipe?.cooking_time}</h3>
          <h3>Minutes</h3>
        </div>

        <div className="flex gap-[1rem] ">

        <span className="text-greenstrong text-[2rem]">
            <BsPeople/>
          </span>
         <h3 className="text-[1.3rem]">
         {singleRecipe?.servings}
         </h3>
         <h4 className="text-[1.3rem]">
            Servings
         </h4>
        
        </div>

        </div>
        
        
        <div className="w-full text-center flex flex-col gap-[10px]">
                <h2 className="text-greenstrong text-[1.2rem]">HOW TO COOK IT</h2>
                <p className="font-light">This recipe was carefully designed and tested by Closet Cooking. Please check out directions at their website.</p>
                <button className="m-auto bg-greenstrong p-[10px] rounded-3xl mb-[1rem]">
                     <a href={singleRecipe?.source_url} className="flex gap-[5px]">
                    Direction <span className="mt-[5px]"><BsArrowRight/></span>
                    </a> 
                    </button>
            </div>
        </div>
        <div className="flex  gap-[2rem] md:w-[50%] w-full my-[1rem] flex-col">
            <h1 className="w-full text-center text-[1.3rem] text-greenstrong">RECIPE INGREDIENTS</h1>
            <div className="flex flex-wrap gap-[2rem] p-[10px]">
                {singleRecipe?.ingredients.map((ind,inx)=>{
                    return <span key={inx} className="flex gap-[7px]">
                      <span className="text-greenstrong text-3xl"> <BsCheckAll/>  </span> <h5 className="font-light">{ind.quantity==null?ind.unit:ind.quantity} {ind. description}</h5> 
                    </span>
                })}
             
            </div>
        </div>
    </div>
           
    </>

  )
}

export default Recipedetails