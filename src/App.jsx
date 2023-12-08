import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Portfolio1 from './assets/port1.jpg'
import Js from './assets/js.png'
import Py from './assets/py.png'
import Tf from './assets/tf.png'
import Re from './assets/react.png'
import AR from './conditional/AR.jsx'
import MC from './conditional/MC.jsx'
import PRO from './conditional/PRO.jsx'
import SC from './conditional/SC.jsx'

function App() {

  const [componentsToRender, setcomponentsToRender] = useState([
    { id: 1, component: <AR />},
    { id: 2, component: <MC />},
    { id: 3, component: <PRO />},
    { id: 4, component: <SC />}
  ])
  
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

  const [showEvent, setShowEvent] = useState(0);

  return (
    <>
    <div>
      <div className = 'bg-[#101628] h-[5rem]'>
        <ol className = 'flex p-10 justify-end'>
          <a href = '#' className = 'm-4 font-semibold underline hover:text-red-400 text-white'>01. Home</a>
          <a href = '#' className = 'm-4 font-semibold underline hover:text-red-400 text-white'>02. Portfolio Projects</a>
          <a href = '#' className = 'm-4 font-semibold underline hover:text-red-400 text-white'>03. About Me!</a>
          <a href = '#' className = 'm-4 font-semibold underline hover:text-red-400 text-white'>04. Gallery Project!</a>
        </ol>
      </div>

      <div className = 'bg-[#101628] h-[55rem] flex-col flex justify-center items-center'>
        <div className = 'flex flex-col justify-center'>
          <div className = 'text-red-400 font-nunito'>
            Hi my name is
          </div>
          <div className = 'text-7xl font-bold text-white my-2 font-nunito'>
            Baron Liu
          </div>
          <div className = 'text-7xl text-white my-2 font-nunito'>
            I'm a Full Stack Developer
          </div>
          <div className = 'text-lg text-white my-5 font-nunito'>
            I'm a full stack developer specializing in building (and ocassionally designing) exceptional <br /> digital experiences. Currently, I'm focused on building responsive full-stack web applications
          </div>
          <a target= "blank" href = 'https://devpost.com/baronliu1993' className = 'text-white my-5 font-nunito border w-40 p-5 hover:bg-red-400'>
            View Work →
          </a>
        </div>
      </div>

      <div className = 'flex bg-[#101628] h-[45rem] justify-center items-center'>
        <div className = 'flex-col flex justify-center m-10'>
          <div className = 'flex my-10'>
            <div className = 'text-red-400 text-3xl font-bold font-nunito' >01. </div>
            <div className = 'text-white mx-10 text-3xl font-bold font-nunito'>About Me</div>
          </div>
          <div className = 'flex flex-col text-gray-100'>
            <div className = 'h-[12rem] w-[30rem] font-nunito'>
            A degree in technology enables me to find the entrepreneurial opportunities required for me to create my own start-up in Canada. I have a great interest in Bioinformatics and believe that with a degree in technology I will be able to build solutions that relieve or fix the many inefficiencies in our healthcare system. For example, determining the shape of proteins is a long and costly process that involves x-ray crystallography. 
            </div>
            <div className = 'h-[12rem] w-[30rem] font-nunito'>
            However, during Rhythm Hacks, I built a web application that was able to solve many of these issues. Firstly, protein visualization could be done through the use of generative large language models that build and display the shape of proteins with a given protein sequence. Furthermore, we built a blockchain web3 application using the Sepolia test network.
            </div>
            <div className = 'font-nunito'>
              Here are a few technologies I've been working with recently
            </div>
          </div>
          <ol className = 'flex my-10 text-white'>
            <li className = 'flex justify-center items-center'>
              <img className = 'h-10 w-10 mr-4' src = {Js}/>
              <div>Javascript</div>
            </li>
            <li className = 'flex justify-center items-center'>
              <img className = 'h-10 w-10 mx-4' src = {Re}/>
              <div>React</div>
            </li>
            <li className = 'flex justify-center items-center'>
              <img className = 'h-10 w-10 mx-4' src = {Py}/>
              <div>Python</div>
            </li>
            <li className = 'flex justify-center items-center'>
              <img className = 'h-10 w-10 mx-4' src = {Tf}/>
              <div>Tensorflow</div>
            </li>
          </ol>
      </div>
        <div className = 'border-2 border-red-400 h-[30rem] w-[40rem] z-10 m-10 relative'>

        </div>
        <img src = {Portfolio1} className = 'h-[30rem] w-[43rem] rounded-lg z-20 absolute top-[65rem] left-[60rem]'/>
      </div>
      
    <div className = 'bg-[#101628] h-[45rem]'>
        <div className = 'flex mx-[21rem]'>
          <div className = 'text-red-400 text-3xl font-bold font-nunito' >02. </div>
          <div className = 'text-white mx-10 text-3xl font-bold font-nunito'>My Involvement</div>
        </div>
        <div className = 'flex justify-center items-center p-10'>
          <div className = 'flex flex-col text-white mx-20 justify-start'>
            <button className = 'my-5 text-2xl font-semibold hover:shadow-lg hover:text-red-400'>IB</button>
            <button className = 'my-5 text-2xl font-semibold hover:shadow hover:text-red-400'>STEMeD!</button>
            <button className = 'my-5 text-2xl font-semibold hover:shadow hover:text-red-400'>DECA</button>
            <button className = 'my-5 text-2xl font-semibold hover:text-red-400'>HOSA</button>
          </div>
          {<AR />}
        </div>
    </div>
    
      <div className = 'bg-[#101628] h-[70rem]'>
        <div className = 'flex mx-[21rem]'>
          <div className = 'text-red-400 text-3xl font-bold font-nunito' >03. </div>
          <div className = 'text-white mx-10 text-3xl font-bold font-nunito'>Projects I have Worked On</div>
        </div>

        <div className = 'flex flex-col justify-center items-center my-14'>
        <div className = 'flex flex-col'>
          <div className = 'text-red-400 font-nunito'>
            @Ignition Hacks
          </div>
          <div className = 'text-white font-nunito text-4xl font-bold'>
            ARCademy
          </div>
          <div className = 'text-white h-[7rem] w-[30rem] font-nunito shadow-2xl bg-[#202A44] p-5 my-10 rounded-xl'>
          Finally, I also worked on a diagnosis device for Wafflehacks that aided in diagnosing neuropathy, myopathy and parkinson’s disease by analyzing electromyogram waves. 
          </div>
        </div>

        <div className = 'mt-14'>
          <div className = 'text-red-400 font-nunito'>
            @RythmHacks
          </div>
          <div className = 'text-white font-nunito text-4xl font-bold '>
            Protential
          </div>
          <div className = 'text-white h-[7rem] w-[30rem] font-nunito shadow-2xl bg-[#202A44] p-5 my-10 rounded-xl'>
          Finally, I also worked on a diagnosis device for Wafflehacks that aided in diagnosing neuropathy, myopathy and parkinson’s disease by analyzing electromyogram waves. 
          </div>
        </div>

        <div className = 'my-14'>
          <div className = 'text-red-400 font-nunito'>
            @WaffleHacks
          </div>
          <div className = 'text-white font-nunito text-4xl font-bold'>
            MyoCharm
          </div>
          <div className = 'text-white h-[7rem] w-[30rem] font-nunito shadow-2xl bg-[#202A44] p-5 my-10 rounded-xl'>
          Finally, I also worked on a diagnosis device for Wafflehacks that aided in diagnosing neuropathy, myopathy and parkinson’s disease by analyzing electromyogram waves. 
          </div>
        </div>
      </div>
      </div>

    <div className = 'bg-[#101628] h-[45rem]'>
      <div className = 'flex mx-[21rem]'>
          <div className = 'text-red-400 text-3xl font-bold font-nunito' >04. </div>
          <div className = 'text-white mx-10 text-3xl font-bold font-nunito'>Fun Facts About Me!</div>
      </div>
      <div className = 'text-white font-bold h-20'>
      {quote} - {author}
      </div>
    </div>
    </div>
    </>
  )
}

export default App
