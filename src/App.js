import React from 'react';
import './styles/main.css';
import { p1, p2, p3, p4 } from './components/projects';
import Typing from 'react-typing-animation';
import { ScrollTo } from "react-scroll-to";
import Emoji from './components/emoji';



const markupPython = <Typing speed={50}>
<ul>
<li><span class = "text-blue-300">class</span> FullStackDev:    </li>
<li className="ml-8">    <span class = "text-blue-300">def</span> __init__(<span class = "text-yellow-500">self</span>):</li>
<li className="ml-16">        <span class = "text-yellow-500">self.name</span> = <span class = "text-red-500">"Sahil Choudhary"</span></li>
<li className="ml-16">        <span class = "text-yellow-500">self.currentLocation</span> = <span class = "text-red-500"></span>"Delhi, India"</li>
<li><br/></li>
<li><span class = "text-blue-300">def</span> skills(name, location):</li>
<li className="ml-8">    <span class = "text-blue-300"></span>if name == <span class = "text-red-500">"Sahil Choudhary"</span>:</li>
<li className="ml-16">        skillsList = [<span class = "text-red-500">"Python", "JavaScript", "Django", "React"</span>]</li>
<li className="ml-16">        <span class = "text-blue-300">print</span>(name, <span class = "text-red-500">"currently residing in"</span>, location, <span class = "text-red-500">"is efficient in -"</span>)</li>
<li className="ml-16">        <span class = "text-blue-300">for</span> i <span class = "text-blue-300">in</span> skillsList:</li>
<li className="ml-24">            <span class = "text-blue-300">print</span>(i)</li>
<li><br/></li>
<li>myDevID = FullStackDev()</li>
<li>skills(myDevID.<span class = "text-yellow-500">name</span>, myDevID.<span class = "text-yellow-500">currentLocation</span>)</li>
<li><br/></li>
<li>Output⤵</li>
<ul className="text-green-500"><li>Sahil Choudhary currently residing in Delhi, India is efficient in -</li>
<li>Python</li>
<li>JavaScript</li>
<li>Django</li>
<li>React</li></ul>
</ul></Typing>
;

 


function App() {


  function incPaddingConsole(e) {
    e.target.style.width = "1rem";
  }

  function decPaddingConsole(e) {
    e.target.style.width = "0.75rem";
  }




  return (
    <div>
      <div className="bgSVG flex grid grid-cols-1 sm:grid-cols-2 md:items-center md:grid-cols-4 lg:grid-cols-8 xl:grid-cols-10 lg:flex sm:px-10 md:px-12 lg:px-48 md:grid-rows-2 lg:grid-rows-1 gap-2 pt-5" >
        <div class="col-span-1 sm:col-span-2 md:col-span-4 lg:col-span-4 xl:col-span-5 sm:px-10 md:px-12 lg:px-36">
          <div className="namemy font-semibold sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-800 sm:px-5 md:px-12 lg:px-36 text-center lg:text-left lg:text-left">Hey there, I'm</div>
          <div className="hoverBig font-bold tracking-wider subpixel-antialiased text-gray-800 wideFonta sm:px-4 md:px-12 lg:px-36 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-center lg:text-left lg:text-left">Sahil Choudhary</div>
          <div className="font-semibold leading-loose namemy text-gray-800 sm:px-4 md:px-12 lg:px-36 sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center lg:text-left lg:text-left ">currently residing in<span className="text-orange-500"> Delhi, India.</span> </div>

          <div className="container mx-auto p-4 px-10 leading-loose text-xl text-gray-800 sm:px-4 md:px-12 lg:px-36 " >
            <div className="font-semibold sm:px-4 md:px-12 lg:px-36 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center">I build <span className="italic">elegant</span> web apps with state-of-the-art technologies including <span className="border-b-2 border-red-400 rounded text-gray-800">Django</span><Emoji symbol=" 🐍" label="python snake emoji"/> and <span className="whitespace-no-wrap overflow-x-auto"><span className="border-b-2 border-red-400 rounded text-gray-800">React</span><Emoji symbol=" ⚛️" label="react/atom emoji"/></span>. Also familiar with <span className="border-b-2 border-red-400 rounded text-gray-800">Data Science</span><Emoji symbol=" 📊" label="bar graph emoji"/> techniques and <span className="border-b-2 border-red-400 rounded text-gray-800">Machine Learning </span><Emoji symbol=" 🤖" label="robot/machine emoji"/> technologies.<span></span></div>
            <div className="font-semibold sm:px-4 md:px-12 lg:px-36 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center "><br/>Therefore, a--wait for it...<br/> <span className="hover:bg-red-500  hover:text-gray-800 bg-gray-800 text-center rounded text-gray-200 my-2 pl-1 pr-1 hover:bounce">Full-Stack Developer</span></div>
            <div className="font-semibold sm:px-4 md:px-12 lg:px-36 text-sm sm:text-xs md:text-sm lg:text-xl xl:text-2xl text-center lg:text-left lg:text-left wideFonta"><br/>Know more about me</div>
            <hr />
            <ul className=" font-bold sm:px-4 md:px-12 lg:px-36 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center lg:text-left lg:text-left">
              <span></span>
              <li class=""><ScrollTo>{({ scroll }) => (
            <a className="cursor-pointer nameMy text-xl pb-2 " onClick={() => scroll({ x: 20, y: 900, smooth:true})}>Click here to see the Projects I've worked on</a>
          
          )}</ScrollTo></li>
              <li></li>
              <li></li>
              <li></li>
              </ul>
          </div></div>

        <div class="flex lg:col-span-4 md:col-span-1 xl:col-span-5 md:w-screen lg:w-full xl:w-full px-auto h-full lg:h-full xl:h-full ">
          <div className="flex-1 container w-screen md:w-screen lg:w-full xl:w-full shadow-lg code-white text-sm font-mono subpixel-antialiased bg-gray-800 px-5 pb-6 pt-4 rounded-lg leading-normal overflow-hidden">
            <div className="flex mb-4 space-x-1">
              <span onMouseEnter={incPaddingConsole} onMouseLeave={decPaddingConsole} className="h-3 w-3 bg-red-500 rounded-full"></span>
              <span onMouseEnter={incPaddingConsole} onMouseLeave={decPaddingConsole} className="h-3 w-3 bg-orange-300 rounded-full"></span>
              <span onMouseEnter={incPaddingConsole} onMouseLeave={decPaddingConsole} className="h-3 w-3 bg-green-500 rounded-full"></span>
            </div>
            <div className="full text-white consoEmu text-xl">
              {markupPython}
            </div>
          </div>
        </div></div>
      <div class="flex">
        <div className="flex-grow ">
        
      <div>
            <svg class="waves bgSVG" id="wavepro" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(45,55,72,0.7" />
                    <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(45,55,72,0.5)" />
                    <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(45,55,72,0.3)" />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="rgb(45,55,72)" />
                </g>
            </svg>
        </div>
      </div></div><div class="bg-gray-800">
      <Typing><h2 id="projID" class="text-center text-6xl consoEmu text-gray-100">Projects</h2></Typing>



      <div className="grid mx-auto px-4 md:px-24 lg:px-48 grid-cols-8 gap-4" >
        <div class="bg-gray-100 col-span-8">
          <div class="max-w-full w-full lg:max-w-full lg:flex bg-gray-800 ">
            <div class="border-r border-b border-l border-gray-400 lg:border-l-1 lg:border-t lg:border-gray-400 bg-gray-100 rounded-lg p-4 flex flex-col justify-between leading-normal ">
              <div class="mb-8 ">
                <p class="text-sm text-gray-600 flex items-center">
                  {p1.type}</p>
                <div class="text-gray-900 font-bold text-xl mb-2">{p1.name} <a href={p1.link} className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 text-right">Github Page</a></div>
                <p class="text-gray-700 text-base break-normal">{p1.desc}</p>
              </div>
              <span className="font-mono text-xs mr-2 overflow-hidden border-b-2 text-center">Technologies Used</span><br/>
              <div class="flex items-center">              
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{p1.tags[0]}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{p1.tags[1]}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{p1.tags[2]}</span>
              </div>
              <p class="text-gray-600 ml-2 text-right text-xs p-0">{p1.dateyear}</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 col-span-8">
          <div class="max-w-full w-full lg:max-w-full lg:flex bg-gray-800">
            <div class="border-r border-b border-l border-gray-400 lg:border-l-1 lg:border-t lg:border-gray-400 bg-gray-100 rounded-lg p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <p class="text-sm text-gray-600 flex items-center">
                  {p2.type}</p>
                <div class="text-gray-900 font-bold text-xl mb-2">{p2.name} <a href={p2.link} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 text-right">Github Page</a></div>
                <p class="text-gray-700 text-base">{p2.desc}</p>
              </div>
              <span className="font-mono text-xs mr-2 overflow-hidden border-b-2 text-center">Technologies Used</span><br/>
              <div class="flex items-center">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{p2.tags[0]}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{p2.tags[1]}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{p2.tags[2]}</span>
           
              </div><p class="text-gray-600 ml-2 text-right text-xs p-0">{p2.dateyear}</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 col-span-8">
          <div class="max-w-full w-full lg:max-w-full lg:flex bg-gray-800">
            <div class="border-r border-b border-l border-gray-400 lg:border-l-1 lg:border-t lg:border-gray-400 bg-gray-100 rounded-lg p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <p class="text-sm text-gray-600 flex items-center">
                  {p3.type}</p>
                <div class="text-gray-900 font-bold text-xl mb-2">{p3.name} <a href={p3.link} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 text-right">Github Page</a></div>
                <p class="text-gray-700 text-base">{p3.desc}</p>
              </div>
              <span className="font-mono text-xs mr-2 overflow-hidden border-b-2 text-center">Technologies Used</span><br/>
              <div class="flex items-center">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{p3.tags[0]}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{p3.tags[1]}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">{p3.tags[2]}</span>
                
              </div><p class="text-gray-600 ml-2 text-right text-xs p-0">{p3.dateyear}</p>
            </div>
          </div>
        </div>

        <div class="bg-gray-100 col-span-8">
          <div class=" max-w-full w-full bg-gray-800">
            <div class="border-r border-b border-l border-gray-400 lg:border-l-1 lg:border-t lg:border-gray-400 bg-gray-100 rounded-lg p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <p class="text-sm text-gray-600 flex items-center">
                  {p4.type}</p>
                <div class="text-gray-900 font-bold text-xl mb-2">{p4.name} <a href={p4.link} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 text-right">Github Page</a></div>
                <p class="text-gray-700 text-base">{p4.desc}</p>
              </div>
              <span className="font-mono text-xs mr-2 overflow-hidden border-b-2 text-center">Technologies Used</span><br/>
              <div class="flex items-center">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{p4.tags[0]}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{p4.tags[1]}</span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m4">{p4.tags[2]}</span>
                
              </div>
              <p class="text-gray-600 ml-2 text-right text-xs p-0">{p4.dateyear}</p>
            </div>
          </div>
        </div>

      </div>
    </div></div>

  );
}

export default App;
