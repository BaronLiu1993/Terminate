import React from 'react'
import Myo from '../assets/Myo.jpg'

function PRO() {
  return (
  <div className = 'text-white flex'>
      <div className = 'flex flex-col justify-center'>
      <div className = 'flex'>
        <div className = 'font-semibold text-2xl'>
            Best Accesibility Hack
        </div>
        <div className = 'mx-5 font-semibold text-2xl text-red-400'>
        @ WaffleHacks
        </div>
      </div>
      <div>
        May 2024
      </div>
      <div className = 'font-nunito'>
      ▲ Developed an AI EMG analysis app using Arduino, <br /> Tensorflow, and React JS. 
      </div>
      <div className = 'font-nunito'>
      ▲ Used to increase the accessibility of neuropathic treatment
      </div>
    </div>
    <img src = {Myo} className = 'h-[20rem] w-[40rem] rounded-md m-20'/>
    </div>
  )
}

export default PRO

