import React from 'react'
import Pic from '../assets/Pic.jpg'

function MC() {
  return (
    <div className = 'text-white flex'>
      <div className = 'flex flex-col justify-center'>
      <div className = 'flex'>
        <div className = 'font-semibold text-2xl'>
           1st Place Competitor
        </div>
        <div className = 'mx-5 font-semibold text-2xl text-red-400'>
        @ IgnitionHacks
        </div>
      </div>
      <div>
        August 2023
      </div>
      <div className = 'font-nunito'>
      ▲ Worked with a team of three designers to build an AR education app <br /> that aims to help students learn about physics and science.
      </div>
      <div className = 'font-nunito'>
      ▲ Used Tensorflow fingerpose backend and React JS for frontend 
      </div>
    </div>
    <img src = {Pic} className = 'h-[20rem] w-[23rem] rounded-md m-20'/>
    </div>
  )
}

export default MC
