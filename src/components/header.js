import React from 'react';

function Header() {
    return (
        <header className="lg:px-16 px-6 bg-white flex flex-wrap items-center lg:py-0 py-2 bg-gray-100">
        <div className="flex-1 flex justify-between items-center">
          <a href="#">
            <span class="font-semibold text-3xl tracking-tight text-gray-800 border-b-4 border-gray-300 pb-3 " children="<portfolio>" />
          </a>
        </div>
        <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block"><svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg></label>
        <input className="hidden" type="checkbox" id="menu-toggle" />
        <div className="hidden lg:flex lg:items-center lg:w-auto w-full" id="menu">
          <nav>
            <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
              <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 mt-2" href="https://www.linkedin.com/in/sahil-dev/">LinkedIn</a></li>
              <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 mt-2" href="https://github.com/SahilChoudhary22">Github</a></li>
              <li><a className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 mt-2" href="#">Resume</a></li>
              <li><button class="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 bg-blue-500 text-white font-bold mt-2 py-2 px-4 rounded">Hire Me
</button></li>
            </ul>
          </nav>
          <a href="#" className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
            <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="https://avatars3.githubusercontent.com/u/40566635?s=460&u=592a18865cceebe1686db58f8271a4a375b9c4af" alt="Sahil Choudhary" />
          </a>
        </div>
      </header>
    );
}

export default Header;