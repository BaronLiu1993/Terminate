import React from 'react'
import DECA from '../assets/DECA.png'

function SC() {
  return (
    <div className = 'text-white flex'>
    <div className = 'flex flex-col justify-center'>
    <div className = 'flex'>
      <div className = 'font-semibold text-2xl'>
          Chapter President
      </div>
      <div className = 'mx-5 font-semibold text-2xl text-red-400'>
      @ HOSA and DECA
      </div>
    </div>
    <div>
      September 2020 - July 2024
    </div>
    <div className = 'font-nunito'>
    ▲ Worked as the President, Student Advisor and Trainer. 
    </div>
    <div className = 'font-nunito'>
    ▲ Collaborated with others to run numerous fundraisers,<br /> training sessions and Regional <br />and Provincial competitions.
    </div>
  </div>
  <img src = {DECA} className = 'h-[20rem] w-[23rem] rounded-md m-20'/>
  </div>
  )
}

export default SC


