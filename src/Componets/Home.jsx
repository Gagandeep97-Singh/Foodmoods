import React from 'react'
import Header from './Header'
import Layout from './Layout'
import Middleware from './Middleware'
import Recipes from './Recipes'


const Home = () => {
  return (
    <>
    <Header/>
<Layout/>
<div className="bg-secondwhite  p-[2rem]">
<Middleware/>
<Recipes/>
</div>
    </>
  )
}

export default Home