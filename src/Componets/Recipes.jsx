import React,{useEffect,useState} from 'react'
import Categorias from './Categorias'
import {apidata} from '../config/apis'
import Recipelist from './Recipelist'
import Pagenation from './Pagenation'
import Svgloading from './Svgloading'



const Recipes = () => {

const [recipeList,setRecipeList]=useState()
const [query ,setQuery]=useState('rice')
const [currentPage,setCurrentPage] = useState(1);
const [recipePerPage,setRecipePerPage] = useState(20)



const fetchingRecipes=async()=>{
const res= await fetch(apidata(query))
const data= await res.json()
setRecipeList(data.data.recipes)
}

useEffect(()=>{
  fetchingRecipes()
},[query])

const lastinx=recipePerPage*currentPage;
const firstinx=lastinx-recipePerPage;
const RecipeSortedData=recipeList?.slice(firstinx,lastinx)

const handleChange=(e)=>{
   e. preventDefault()
   setQuery(e.target.value)
   
}



  return (
    <>
    <div className="w-full flex flex-col">
 <div className='flex w-full md:flex-row flex-col md:gap-[2rem]'>
  <h1 className="font-third md:text-[3rem] text-[1.5rem] text-bold">Recipes</h1>
  <input 
   type="text" placeholder='Search'
     className="md:w-[50%] w-[90%] h-[2rem] 
     outline-none mt-[1.5rem] pl-[1rem] 
     rounded-md"
     onChange={handleChange}/>
 </div>
 <div className="flex md:flex-row flex-col w-full gap-5">
 <Categorias setQuery={setQuery}  />
 <div className="flex flex-1 py-[2rem] px-[1rem]  flex-wrap gap-[1rem]">
  {recipeList?<Recipelist recipeList={RecipeSortedData}/> : <Svgloading/>
  }
 </div>
 </div>
    </div>
    <Pagenation totalpost={recipeList?.length} recipePerPage={recipePerPage} setCurrentPage={setCurrentPage} />
    </>
  )
}

export default Recipes