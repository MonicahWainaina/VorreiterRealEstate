import React from 'react'
/*import { featured } from "../../Data/Data"*/
import './featured.css'
import { AnimationOnScroll } from 'react-animation-on-scroll';


const FeaturedCard = () => {
  return (
    <>
      <div className="md:mx-auto md:container px-4">
      <div class="-mx-4 flex flex-wrap">
      <div class="w-full px-4">
        <div class="mx-auto  max-w-[510px] text-center lg:-mb-28">
          <h1 class="text-black mb-2 text-2xl lg:text-6xl tracking-tight font-extrabold">
            Featured Property Types
          </h1>
        </div>
      </div>
    </div>
                <div className="pb-32 pt-10 md:pt-40 m pl-10 pr-10">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap items-center pb-12">
                            <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                                <div className="py-2 text-color">
                                    <div className=" text-2xl lg:text-5xl tracking-tight font-extrabold">Residential</div>
                                    <h2 className="text-lg lg:text-xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                                    <a href='/catalogue'><button className='btn1 text-white bg-vorreiter hover:bg-black   rounded-full  px-5 py-2.5 '>FIND A NEW HOME</button></a>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                <img className="absolute w-full h-full lg:h-max inset-0 object-cover object-center rounded-md" src="./images/int6.jpg" alt='' />               
                            </div>
                          
                        </div>
                    </div>
                </div>
                <div className="pb-32 pt-16  pl-10 pr-10">
                    <div className="mx-auto">
                        <div className="flex flex-wrap flex-row-reverse items-center">
                            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
                                <div className="py-2 text-color">
                                    <div className="text-2xl lg:text-5xl tracking-tight font-extrabold">Commercial</div>
                                    <h2 className="text-lg lg:text-xl leading-7 md:leading-10 f-f-r py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                                    <a href='/catalogue'><button className='btn1 text-white bg-vorreiter hover:bg-black   rounded-full  px-5 py-2.5 '>FIND A NEW HOME</button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                <img className="absolute w-full h-full  lg:h-max inset-0 object-cover object-center rounded-md" src="./images/office.jpg" alt=''  />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-32 pt-52 pl-10 pr-10">
                    <div className="container mx-auto">
                        <div className="flex flex-wrap items-center pb-12">
                            <div className="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                                <div className="py-2 text-color">
                                    <div className="text-2xl lg:text-5xl tracking-tight font-extrabold">Land</div>
                                    <h2 className="text-lg lg:text-xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                                    <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                                    <a href='/catalogue'><button className='btn1 text-white bg-vorreiter hover:bg-black   rounded-full  px-5 py-2.5 '>EXPLORE MORE LAND LISTINGS</button></a>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                                <img className="absolute w-full h-full lg:h-max inset-0 object-cover object-center rounded-md" src="./images/land5.jpg" alt='' />
                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default FeaturedCard