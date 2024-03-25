import React from 'react'
import { useState } from 'react'
import AR from '../conditional/AR.jsx'
import MC from '../conditional/MC.jsx'
import PRO from '../conditional/PRO.jsx'
import SC from '../conditional/SC.jsx'

function Involve() {
    const [selectedComponent, setSelectedComponent] = useState(<AR />);

    const handleItemClick = (component) => {
      setSelectedComponent(component);
    };
  
    const componentsToRender = [
      { id: 1, component: <AR />, Name: 'STEMeD' },
      { id: 2, component: <MC />, Name: 'IgnitionHacks' },
      { id: 3, component: <PRO />, Name: 'WaffleHacks' },
      { id: 4, component: <SC />, Name: 'DECA and HOSA' }
    ];
  return (
    <div id = 'portfolio'>
        <div className = ' h-[45rem] mt-[10rem]'>
        <div className = 'flex mx-[21rem]'>
          <div className = 'text-red-400 text-3xl font-bold font-nunito' >02. </div>
          <div className = 'text-white mx-10 text-3xl font-bold font-nunito'>My Involvement</div>
        </div>
        <div className = 'flex justify-center'>
        <div className = 'h-[12rem] w-[30rem] font-nunito text-white flex flex-col space-y-5 mt-10'>
              <div>I have strong verbal and written communication skills who works to actively collaborate and communicate with others as a leader and team player to problem solve. I regularly take initiative and take a creative and interdisciplinary approach to solving issues. This was shown through my work as:</div>
              <ol className = 'text-red-400 font-bold'>
                <li>▲ Founder of STEMeD (STEM Outreach Program in Markham)</li>
                <li>▲ Lead Coder at MMHS Robotics</li>
                <li>▲ President of DECA and HOSA Chapter at MMHS</li>
                <li>▲ Civic Participation and Advocacy with Michael Chan</li>
              </ol>
            </div>
          </div>
        <div className = 'flex justify-center items-center p-10'>
          <div className='flex justify-center items-center'>
          <div className='flex flex-col text-white mx-36 justify-center'>
            {componentsToRender.map((item) => (
            <div className = 'static top-0 left-0'>
                <button key={item.id} onClick={() => handleItemClick(item.component)} className='my-5 text-lg space-y-10 bg-red-400 font-bold hover:shadow-lg hover:text-black w-[10rem] h-[3rem] border-solid border-black rounded-md'>{item.Name}</button>
            </div>
            ))}
            
          </div>
          <div>{selectedComponent}</div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Involve
