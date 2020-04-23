import React from 'react';

function Header() {
    return (
        <div className="">
            <nav class="fixed z-100 bg-gray-100 inset-x-0 top-0 border-b-2 border-gray-200 lg:border-b-0 lg:static flex items-center">
                <div class="w-full max-w-screen-xl relative mx-auto px-6 py-3 border-b-3 border-gray-200 ">
                    {/* <svg class="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg> */}
                    <span class="font-semibold text-3xl tracking-tight text-gray-800 border-b-4 border-gray-300 pb-2 " children="<portfolio>" />
                    
            </div>
            
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-gray-800 border-teal-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3 text-gray-800" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-white mx-4">
                        GitHub
      </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-white mx-4">
                        LinkedIn
      </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-gray-800 hover:text-white mx-4">
                        Resume
      </a>
                </div>
                <div>
                    <a href="google.com" class="inline-block text-sm px-4 py-2 leading-none border rounded text-gray-800 border-black hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Hire Me</a>
                </div>
            </div>
            
        </nav><div class="pb-2">.</div></div >
    );

}

export default Header;