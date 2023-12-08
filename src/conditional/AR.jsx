import React from 'react'
import STEM from '../assets/STEMED.jpg'

function AR() {
  return (
    <div className = 'text-white flex'>
      <div className = 'flex flex-col justify-center'>
      <div className = 'flex'>
        <div className = 'font-semibold text-2xl'>
            Studio Developer
        </div>
        <div className = 'mx-5 font-semibold text-2xl text-red-400'>
        @ HackThe6ix
        </div>
      </div>
      <div>
        January - April 2018
      </div>
      <div className = 'my-10 font-nunito'>
      ▲ Worked with a team of three designers to build a marketing website and <br /> e-commerce playform for blistablox, an ambitious startup originating <br /> from Northeastern
      </div>
    </div>
    <img className = 'h-[20rem] w-[23rem] rounded-md m-20' src = {STEM}/>
    </div>
  )
}

export default AR
