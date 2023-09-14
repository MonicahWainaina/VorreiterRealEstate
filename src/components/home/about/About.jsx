import React from 'react'
import './about.css'

const About = () => {
  return (
    <>
      <div className="md:mx-auto md:container px-4">
        <div className="pb-32 pt-16">
          <div className="mx-auto">
            <div className="flex flex-wrap flex-row-reverse items-center">
              <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0 mt-0">
                <div className="py-2 text-color">
                  <h1 className="text-2xl lg:text-6xl tracking-tight font-extrabold "><span className='text-vorreiter'>Get To</span> Know Us</h1>
                  <h2 className="text-lg lg:text-xl leading-7 md:leading-10 f-f-r py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                  <a href="/About">
                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                      <h3 className="f-f-r text-lg lg:text-2xl font-semibold underline text-vorreiter">Lets Get Started</h3>
                      <div className="pl-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="black">
                          <path d="M13.1719 12L8.22192 7.04999L9.63592 5.63599L15.9999 12L9.63592 18.364L8.22192 16.95L13.1719 12Z" fill="#D53F8C" />
                        </svg>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="imh hidden lg:w-1/3 md:w-1/2 w-full relative h-96 lg:flex items-end justify-center ">
                <img className="absolute w-full h-auto inset-0 object-cover object-center rounded-md" src=" images/vorreiter.png" alt=''/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About