import React from 'react'
import {useState, useEffect } from 'react'
import Js from '../assets/js.png'
import Py from '../assets/py.png'
import Tf from '../assets/tf.png'
import Re from '../assets/react.png'
import Me from '../assets/Me.jpg'

function About() {
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
    <div id = 'about'>
    <div className = 'flex bg-[#101628] h-[45rem] p-10 justify-center items-center'>
        <div className = 'flex-col flex justify-center m-10'>
          <div className = 'flex my-10'>
            <div className = 'text-red-400 text-3xl font-bold font-nunito' >01. </div>
            <div className = 'text-white mx-10 text-3xl font-bold font-nunito'>About Me</div>
          </div>
          <div className = 'flex flex-col text-gray-100'>
            <div className = ' w-[30rem] font-nunito'>
            <div> I am a student who is: </div>
            <ol className = 'text-red-400 font-bold'>
                <li>▲ Strong in JavaScript and Python</li>
                <li>▲ Knowledgable in Microsoft Office and Data Collection (Particularly in Excel data analysis and formatting)</li>
                <li>▲ Highly adaptable and a Creative Problem Solver</li>
              </ol>
            </div>
            <div>
                I also love reading in my free time. My favourite novels include <br /> "Notes from Underground" and "White Nights" by Dostoevsky. <br/> Here are some of my favourite quotes!
            </div>
            <div className = 'mt-10 w-[30rem]'>
                Quote of the Page: {quote} - {author}
            </div>
          </div>
          
          <ol className = 'flex my-10 text-white'>
            <li className = 'flex justify-center font-nunito items-center'>
              <img className = 'h-10 w-10 mr-4 font-nunito font-bold' src = {Js}/>
              <div>Javascript</div>
            </li>
            <li className = 'flex justify-center font-nunito items-center'>
              <img className = 'h-10 w-10 mx-4 font-nunito font-bold' src = {Re}/>
              <div>React</div>
            </li>
            <li className = 'flex justify-center font-nunito items-center'>
              <img className = 'h-10 w-10 mx-4 font-nunito font-bold' src = {Py}/>
              <div>Python</div>
            </li>
            <li className = 'flex justify-center font-nunito items-center'>
              <img className = 'h-10 w-10 mx-4 font-nunito font-bold' src = {Tf}/>
              <div>Tensorflow</div>
            </li>
          </ol>
      </div>
        <div >
          <img className = 'border-2 border-red-400 h-[35rem] w-[30rem] z-10 m-10 relative' src = {Me}/>
        </div>
      </div>
    </div>
  )
}

export default About
