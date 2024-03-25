import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Js from './assets/js.png'
import Py from './assets/py.png'
import Tf from './assets/tf.png'
import Re from './assets/react.png'
import AR from './conditional/AR.jsx'
import MC from './conditional/MC.jsx'
import PRO from './conditional/PRO.jsx'
import SC from './conditional/SC.jsx'
import Navbar from './navbar.jsx'
import Protential from './assets/Protential.png'
import Hack from './assets/HackThe6ix.jpg'
import Synapse from './assets/Synapse.jpg'

function App() {

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
  
  const [quote, setQuote] = useState("")
  const [author, setAuthor] = useState("")

  useEffect(() => {
    fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then(
      (quote) => {
        setQuote(quote.content)
        setAuthor(quote.author)
        console.log(quote)
      }
    )
  }, [])

  return (
    <div>
      <Navbar />
    <div id = 'bg-1'>
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
          <div className = 'text-lg text-white my-5 font-nunito'>
          Who is passionate about the intersection between biological and software engineering.
          </div>
          <a target= "blank" href = 'https://devpost.com/baronliu1993' className = 'text-white my-5 font-nunito border w-40 p-5 hover:bg-red-400'>
            View Work →
          </a>
        </div>
      </div>

      <div className = 'flex bg-[#101628] h-[45rem] p-10 justify-center items-center'>
        <div className = 'flex-col flex justify-center m-10'>
          <div className = 'flex my-10'>
            <div className = 'text-red-400 text-3xl font-bold font-nunito' >01. </div>
            <div className = 'text-white mx-10 text-3xl font-bold font-nunito'>About Me</div>
          </div>
          <div className = 'flex flex-col text-gray-100'>
            <div className = ' w-[30rem] font-nunito'>
            <div>I am a Grade 12 IB student at Milliken Mills High School. I have extensive knowledge in: </div>
            <ol className = 'text-red-400 font-bold'>
                <li>▲ JavaScript and Python</li>
                <li>▲ Microsoft Office (Particularly in Excel data analysis and formatting)</li>
                <li>▲ Highly adaptable and Creative Problem Solver</li>
              </ol>
            </div>
          </div>
          
          <ol className = 'flex my-10 text-white'>
            <li className = 'flex justify-center font-nunito items-center'>
              <img className = 'h-10 w-10 mr-4' src = {Js}/>
              <div>Javascript</div>
            </li>
            <li className = 'flex justify-center font-nunito items-center'>
              <img className = 'h-10 w-10 mx-4' src = {Re}/>
              <div>React</div>
            </li>
            <li className = 'flex justify-center font-nunito items-center'>
              <img className = 'h-10 w-10 mx-4' src = {Py}/>
              <div>Python</div>
            </li>
            <li className = 'flex justify-center font-nunito items-center'>
              <img className = 'h-10 w-10 mx-4' src = {Tf}/>
              <div>Tensorflow</div>
            </li>
          </ol>
      </div>
        <div className = 'border-2 border-red-400 h-[30rem] w-[40rem] z-10 m-10 relative'>

        </div>
      </div>
      

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
                <li>▲ Civic Participation with Michael Chan</li>
              </ol>
            </div>
          </div>
        <div className = 'flex justify-center items-center p-10'>
          <div className='flex justify-center items-center'>
          <div className='flex flex-col text-white mx-36 justify-start'>
            {componentsToRender.map((item) => (
              <button key={item.id} onClick={() => handleItemClick(item.component)} className='my-5 text-lg space-y-10 bg-red-400 font-bold hover:shadow-lg hover:text-black w-[10rem] h-[3rem] border-solid border-black rounded-md'>{item.Name}</button>
            ))}
          </div>
          {selectedComponent}
        </div>
        </div>
    </div>
    
      <div className = ' h-[80rem] mt-[10rem]'>
        <div className = 'flex justify-center'>
          <div className = 'text-red-400 text-3xl font-bold font-nunito' >03. </div>
          <div className = 'text-white mx-10 text-3xl font-bold font-nunito'>Projects I have Worked On</div>
        </div>
        
        <div>
        <div className = 'flex justify-center items-center my-14 space-x-10'>
        <div className = 'flex flex-col'>
          <div className = 'text-red-400 font-bold font-nunito bg-gray-100 rounded-xl w-[20rem] my-2'>
            @RythmHacks (Accelerator Centre)
          </div>
          <div className = 'text-white font-nunito text-4xl font-bold'>
            Protential
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


        <div className = 'flex space-x-10 justify-center'>
        <div className = 'flex flex-col justify-center'>
          <div className = 'text-red-400 font-bold font-nunito bg-gray-100 rounded-xl w-[20rem] my-2'>
            @HackThe6ix (TMU)
          </div>
          <div className = 'text-white font-nunito text-4xl font-bold '>
            SkinACure
          </div>
          
          <div className = 'text-white w-[30rem] font-nunito shadow-2xl bg-[#202A44] p-5 my-10 rounded-xl'>
            <div className = 'mb-10'>AI skin lesion detector built using YoloV8 model and React JS for frontend. </div>
            <a target= "blank" href = 'https://devpost.com/software/skinacure' className = 'text-white font-nunito border p-2 hover:bg-red-400'>
            View Project →
            </a>
        </div>
          
        </div>
        <img className = 'rounded-lg h-[10rem] w-[10rem]' src = {Hack}/>
        </div>

        <div className = 'ml-[9rem] my-14 flex space-x-10 justify-center'>
          <div className = 'flex flex-col'>
          <div className = 'text-red-400 font-bold font-nunito bg-gray-100 rounded-xl w-[20rem] my-2'>
            @DeltaHacks (McMaster University)
          </div>
          <div className = 'text-white font-nunito text-4xl font-bold'>
            Synapse
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
    </div>
  )
}

export default App
