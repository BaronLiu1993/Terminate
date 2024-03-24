import React from 'react'
import STEM from '../assets/STEMED.jpg'

function AR() {
  return (
    <div className = 'text-white flex'>
      <div className = 'flex flex-col justify-center'>
      <div className = 'flex'>
        <div className = 'font-semibold text-2xl'>
            STEMeD Founder (STEM Outreach)
        </div>
        <div className = 'mx-5 font-semibold text-2xl text-red-400'>
        @ HackThe6ix
        </div>
      </div>
      <div>
        January 2022 - April 2024
      </div>
      <div className = 'font-nunito'>
      ▲ Worked with a team of IB students to start a community initiative <br /> to teach kids coding and computer engineering with Microbits and <br />Arduinos
      </div>
    </div>
    <img className = 'h-[20rem] w-[23rem] rounded-md m-20' src = {STEM}/>
    </div>
  )
}

export default AR
