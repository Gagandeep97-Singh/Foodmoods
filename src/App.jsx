import React from 'react'
import Home from './Componets/Home'
import {Routes,Route} from 'react-router-dom'
import Recipedetails from './Componets/Recipedetails'

const App = () => {
  return (
   
   <div className="w-[100vw] min-h-[100vh] bg-green font-display flex justify-center items-center overflow-x-hidden">
  <div className="w-[90%] my-[2rem]  h-[90%] bg-firstwhite rounded-tr-[30px] rounded-tl-[30px] ">
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/recipe/:id' element={<Recipedetails/>}/>

</Routes>
  </div>
   </div>
  )
}

export default App