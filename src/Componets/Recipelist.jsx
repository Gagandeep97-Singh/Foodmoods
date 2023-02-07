import React from 'react'
import { Link } from 'react-router-dom'
const Recipelist = ({recipeList}) => {
    
  
  return (
    <>
    {recipeList?.map((recipe)=> <Link to={`/recipe/${recipe.id}`} className="md:w-[45%] w-full h-[7rem] border-[1px] border-border bg-firstwhite overflow-hidden" key={recipe.id}>
     <div className="flex gap-[10px]">
     <img src={recipe.image_url} alt="image-name" className="w-[9rem] h-[7rem] rounded-full p-[7px]" />
     <div className="p-[10px]">
        <h2>{recipe.title}</h2>
        <h4>{recipe.publisher}</h4>
     </div>
     </div>
  </Link>
    )}
    </>
  )
}

export default Recipelist