import React from 'react'
import Svg from '../assits/loading.png'

const Svgloading = () => {
  return (
    <div className="w-full m-auto">
        <img src={Svg} alt="loading" className="animate-spin" />
    </div>
  )
}

export default Svgloading