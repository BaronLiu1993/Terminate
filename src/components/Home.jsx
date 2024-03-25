import React from 'react'

function About() {
  return (
    <div id = 'home'>
    <div className = 'h-[55rem] flex-col flex justify-center items-center'>
        <div className = 'flex flex-col justify-center'>
          <div className = 'text-red-400 font-nunito'>
            Hi my name is
          </div>
          <div className = 'text-7xl font-bold text-white my-2 font-nunito'>
            Baron Liu
          </div>
          <div className = 'text-7xl text-white my-2 font-nunito'>
            I'm a Grade 12 IB Student
          </div>
          <div className = 'text-lg text-white my-5 font-nunito  font-bold p-2 rounded-2xl bg-[#101628]'>
          Who is passionate about the intersection between biological and software engineering.
          </div>
          <div className = 'flex space-x-10'>
            <a target= "blank" href = 'https://devpost.com/baronliu1993' className = 'text-white font-bold my-5 font-nunito border w-40 p-5 hover:bg-red-400'>
              View Work →
            </a>
            <a target= "blank" href = 'https://github.com/BaronLiu1993' className = 'text-white font-bold my-5 font-nunito border w-40 p-5 hover:bg-red-400'>
              View Github →
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default About
