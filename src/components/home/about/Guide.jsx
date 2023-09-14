import React from 'react'
import './guide.css'



const Guide = () => {
  return (
    <>
    <div className="pb-16" style={{ fontFamily: '"Lato", sans-serif' }}>
      {/* Code block starts */}
      <dh-component>
        <section className="max-w-8xl mx-auto container bg-white pt-16">
          <div>
            <div role="contentinfo" className="flex items-center flex-col px-4">
              <h1 tabIndex={0} className=" text-2xl lg:text-6xl tracking-tight font-extrabold  text-gray-800 mx-auto pt-4">NeighbourHood Guide</h1>
            </div>
            <div tabIndex={0} aria-label="group of cards" className="focus:outline-none mt-20 flex flex-wrap justify-center gap-10 px-4 ml-20">
              <div tabIndex={0} aria-label="card 1" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
      
                <div className="w-10/12">
                  <h2 tabIndex={0} className="focus:outline-none text-2xl lg:text-5xl tracking-tight font-extrabold  text-gray-800">Westlands</h2>
                  <p tabIndex={0} className="focus:outline-none text-lg text-gray-600 leading-normal pt-2">It provides a very simple start, no need to write a lot of code, you just import it and start the primitive components and create the ones you need.</p>
                  <a href='/catalogue'><button className='btn1 text-white bg-vorreiter hover:bg-black   rounded-full  px-5 py-2.5 '>EXPLORE</button></a>
                </div>
              </div>
              <div tabIndex={0} aria-label="card 2" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-10/12">
                  <h2 tabIndex={0} className="focus:outline-none text-2xl lg:text-5xl tracking-tight font-extrabold  text-gray-800">Kilimani</h2>
                  <p tabIndex={0} className="focus:outline-none text-lg text-gray-600 leading-normal pt-2">Modify the visual appearance of your site – including colors, fonts, margins and other style-related properties – with a sophisticated style.</p>
                  <a href='/catalogue'><button className='btn1 text-white bg-vorreiter  hover:bg-black  rounded-full  px-5 py-2.5 '>EXPLORE</button></a>
                </div>
              </div>
              <div tabIndex={0} aria-label="card 3" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-10/12">
                  <h2 tabIndex={0} className="focus:outline-none text-2xl lg:text-5xl tracking-tight font-extrabold  text-gray-800">Karen</h2>
                  <p tabIndex={0} className="focus:outline-none text-lg text-gray-600 leading-normal pt-2">Instead of just giving you the tools to create your own site, they offer you a list of themes you can choose from. Thus a handy product.</p>
                  <a href='/catalogue'><button className='btn1 text-white bg-vorreiter  hover:bg-black  rounded-full  px-5 py-2.5 '>EXPLORE</button></a>
                </div>
              </div>
              <div tabIndex={0} aria-label="card 4" className="focus:outline-none flex sm:w-full md:w-5/12 pb-20">
                <div className="w-10/12">
                  <h2 tabIndex={0} className="focus:outline-none text-2xl lg:text-5xl tracking-tight font-extrabold  text-gray-800">Lavington</h2>
                  <p tabIndex={0} className="focus:outline-none text-lg text-gray-600 leading-normal pt-2">We have chosen the bright color palettes that arouse the only positive emotions. The kit that simply assures to be loved by everyone.</p>
                  <a href='/catalogue'><button className='btn1 text-white bg-vorreiter hover:bg-black  rounded-full  px-5 py-2.5 '>EXPLORE</button></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </dh-component>
      {/* Code block ends */}
    </div>

    </>
  )
}

export default Guide