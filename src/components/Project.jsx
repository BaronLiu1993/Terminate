import React from 'react'
import Protential from '../assets/Protential.png'
import Hack from '../assets/6ix.jpg'
import Synapse from '../assets/Synapse.jpg'

function Project() {
  return (
    <div id = 'projects'>
    <div className = ' h-[80rem] mt-[10rem]'>
        <div className = 'flex justify-center'>
          <div className = 'text-red-400 text-3xl font-bold font-nunito' >03. </div>
          <div className = 'text-white mx-10 text-3xl font-bold font-nunito'>Projects I have Worked On</div>
        </div>
        
        <div>
        <div className = 'flex justify-center items-center my-14 space-x-10'>
        <div className = 'flex flex-col'>
          <div className = 'text-white font-nunito text-4xl font-bold'>
            Protential
          </div>
          <div className = 'text-red-400 font-bold font-nunito bg-gray-100 rounded-xl w-[20rem] my-2'>
            @RythmHacks (Accelerator Centre)
          </div>
          <div className = 'text-white w-[30rem] font-nunito shadow-2xl bg-[#202A44] p-5 my-10 rounded-xl'>
            <div className = 'mb-10'>Finally, I also worked on a diagnosis device for Wafflehacks that aided in diagnosing neuropathy, myopathy and parkinson’s disease by analyzing electromyogram waves. </div>
            <a target= "blank" href = 'https://devpost.com/software/protential' className = 'text-white p-2 font-nunito border hover:bg-red-400'>
            View Project →
            </a>
            
          </div>
          
        </div>
        <img className = 'rounded-lg h-[10rem] w-[10rem]' src = {Protential}/>
        </div>


        <div className = 'flex space-x-10 justify-center items-center'>
        <div className = 'flex flex-col justify-center'>
          <div className = 'text-white font-nunito text-4xl font-bold '>
            SkinACure
          </div>
          <div className = 'text-red-400 font-bold font-nunito bg-gray-100 rounded-xl w-[20rem] my-2'>
            @HackThe6ix (TMU)
          </div>
          
          <div className = 'text-white w-[30rem] font-nunito shadow-2xl bg-[#202A44] p-5 my-10 rounded-xl'>
            <div className = 'mb-10'>AI skin lesion detector built using YoloV8 model and React JS for frontend. Used to increase the accessibility of skincare diagnosis and treatment</div>
            <a target= "blank" href = 'https://devpost.com/software/skinacure' className = 'text-white font-nunito border p-2 hover:bg-red-400'>
            View Project →
            </a>
        </div>
          
        </div>
        <img className = 'rounded-lg h-[10rem] w-[10rem]' src = {Hack}/>
        </div>

        <div className = 'ml-[9rem] my-14 flex space-x-10 justify-center items-center'>
          <div className = 'flex flex-col'>
          <div className = 'text-white font-nunito text-4xl font-bold'>
            Synapse
          </div>
          <div className = 'text-red-400 font-bold font-nunito bg-gray-100 rounded-xl w-[20rem] my-2'>
            @DeltaHacks (McMaster University)
          </div>
          <div className = 'text-white w-[30rem] font-nunito shadow-2xl bg-[#202A44] p-5 my-10 rounded-xl'>
              <div className = 'mb-10'>Created web app that automates the written clinical research data collection process. It uses natural language processing to translate and extract meaning out of speech and summarises it for researchers. </div>
          
            <a target= "blank" href = 'https://devpost.com/software/synapse-vo56gh' className = 'text-white font-nunito border p-2 hover:bg-red-400'>
            View Project →
            </a>
          </div>
        </div>
        <img src = {Synapse} className = 'rounded-lg h-[10rem]'/>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Project
