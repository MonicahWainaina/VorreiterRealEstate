import React, { useState, Fragment } from 'react'
import './aboutp.css'
import "animate.css/animate.min.css"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Navbar from '../../common/header/Navbar'



const AboutP = () => {

  return (
    <>
      <Navbar />
      <div className=" px-32">
        <div className="pb-32 pt-16">
          <div className="mx-auto">
            <div className="flex flex-wrap flex-row-reverse items-center">
              <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0 mt-0">
                <div className="py-2 text-color">
                  <h1 className="text-2xl lg:text-6xl tracking-tighter  font-black"><span className='text-vorreiter'>Get To</span> Know Us</h1>
                  <h2 className="text-xl lg:text-xl leading-7 md:leading-10 f-f-r py-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h2>
                </div>
              </div>
              <div className=" hidden lg:w-1/3 md:w-1/2 w-full relative h-96 lg:flex items-end justify-center ">
                <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="./images/3183248.jpg" alt />
                <div className="relative flex z-10 p-4 shadow rounded mx-auto w-9/12 -mb-0.53">
                  <div className="mt-4 flex items-center">
                    <div>

                      <img className=" imh " src=" images/vorreiter.png" alt='' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-32 pt-16 px-32">
        <div className="mx-auto">
          <div className="flex flex-wrap flex-row-reverse items-center">
            <div className="md:w-1/2 lg:w-2/3 w-full lg:pl-20 md:pl-10 sm:pl-0 pl-0">
              <div className="py-2 text-color">
                <h1 className="text-2xl lg:text-5xl tracking-tighter md:leading-snug f-f-l font-black"><span className='text-vorreiter'>Get To</span> Know Us</h1>
                <h2 className="text-lg lg:text-2xl leading-7 md:leading-10 f-f-r py-8">Here at Globex we take special care of what your organization needs instead of selling you a mass market tool that takes a one size fits all approach. I personally review each and every client business and oversee the team that tailores a solution</h2>
                <div className="flex items-center cursor-pointer pb-4 md:pb-0">
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
              <img className="absolute w-full h-full inset-0 object-cover object-center rounded-md" src="./images/3183248.jpg" alt />
              <div className="relative z-10 p-4 backdrop-blur shadow rounded mx-auto w-9/12 -mb-20">
                <div className="mt-4 flex items-center">
                  <div className="  ">
                    <h4 className="text-black text-xl font-bold text-center leading-4 tracking-normal mb-2">Vorreiter Real Estate</h4>
                    <img className=" imh " src=" images/vorreiter.png" alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutP
 /* <div className="container-xxl py-5">
     <div className="container mx-auto min-h-[800px] mb-14">
       <div className=" flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        
           <div className=' flex flex-col wow fadeIn' data-wow-delay="0.1s" animateIn="animate__bounceIn">
             <div className="about-img relative overflow-hidden p-5 pe-0">
               <img className="img-fluid object-contain w-full" alt='' src=" images/about.jpg" />
             </div>
           </div>


        
           <div className="flex flex-col wow fadeIn" data-wow-delay="0.5s">
             <h1 className="mb-4 lg:text-[30px] font-semibold">#1 Place To Find The Perfect Property</h1>
             <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
             <p><i className=" kk fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
             <p><i className=" kk  fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
             <p><i className=" kk  fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
             <a className="btnb  mt-3 text-black rounded p-4 text-sm " href="">Read More</a>
           </div>
       
       </div>
     </div>
   </div>

   <div className="container-xxl py-5">
     <div className="container mx-auto min-h-[800px] mb-14">
       <div className="bg-light rounded p-3">
         <div className="bg-white rounded p-4" style={{ border: "1px dashed rgba(#6d8aad)" }}>
           <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            
               <div className="flex flex-col">
                 <img className="img-fluid rounded object-contain w-full" src="images/call-to-action.jpg" alt="" />
               </div>
           
           
               <div className="flex flex-col  gap-y-4" >
                 <div className="mb-4">
                   <h1 className="mb-3 lg:text-[30px] font-semibold">Contact With Our Certified Agent</h1>
                   <p>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                 </div>
                 <div className='flex flex-row gap-x-4'>
                   <a href="" className="btnb  btn-primary  text-black rounded p-4 text-sm  py-3 px-4"><i className="fa fa-phone-alt"> </i>Make A Call</a>
                   <a href="" className="btnb2 btn-dark  text-white rounded p-4 text-sm  py-3 px-4"><i className="fa fa-calendar-alt"> </i>Get Appoinment</a>
                 </div>
               </div>
            

           </div>
         </div>
       </div>
     </div>
   </div>

   <div>
     <div className="container flex justify-center mx-auto pt-16">
       <div>
         <p className="text-gray-500 text-lg text-center font-normal pb-3">BUILDING TEAM</p>
         <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
       </div>
     </div>
     <div className="w-full bg-gray-100 px-10 pt-10">
       <div className="container mx-auto">
         <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
           <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
             <div className="rounded overflow-hidden shadow-md bg-white">
               <div className="absolute -mt-20 w-full flex justify-center">
                 <div className="h-32 w-32">
                   <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt className="rounded-full object-cover h-full w-full shadow-md" />
                 </div>
               </div>
               <div className="px-6 mt-16">
                 <div className="font-bold text-3xl text-center pb-1">Andres Berlin</div>
                 <p className="text-gray-800 text-sm text-center">Chief Executive Officer</p>
                 <p className="text-center text-gray-600 text-base pt-3 font-normal">The CEO's role in raising a company's corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.</p>
                 <div className="w-full flex justify-center pt-5 pb-5">
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                         <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                       </svg>
                     </div>
                   </a>
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                         <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                       </svg>
                     </div>
                   </a>
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                         <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                         <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                       </svg>
                     </div>
                   </a>
                 </div>
               </div>
             </div>
           </div>
           <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
             <div className="rounded overflow-hidden shadow-md bg-white">
               <div className="absolute -mt-20 w-full flex justify-center">
                 <div className="h-32 w-32">
                   <img src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif" alt className="rounded-full object-cover h-full w-full shadow-md" />
                 </div>
               </div>
               <div className="px-6 mt-16">
                 <div className="font-bold text-3xl text-center pb-1">Silene Tokyo</div>
                 <p className="text-gray-800 text-sm text-center">Product Design Head</p>
                 <p className="text-center text-gray-600 text-base pt-3 font-normal">The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.</p>
                 <div className="w-full flex justify-center pt-5 pb-5">
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                         <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                       </svg>
                     </div>
                   </a>
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                         <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                       </svg>
                     </div>
                   </a>
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                         <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                         <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                       </svg>
                     </div>
                   </a>
                 </div>
               </div>
             </div>
           </div>
           <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
             <div className="rounded overflow-hidden shadow-md bg-white">
               <div className="absolute -mt-20 w-full flex justify-center">
                 <div className="h-32 w-32">
                   <img src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif" alt className="rounded-full object-cover h-full w-full shadow-md" />
                 </div>
               </div>
               <div className="px-6 mt-16">
                 <div className="font-bold text-3xl text-center pb-1">Johnson Stone</div>
                 <p className="text-gray-800 text-sm text-center">Manager Development</p>
                 <p className="text-center text-gray-600 text-base pt-3 font-normal">Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.</p>
                 <div className="w-full flex justify-center pt-5 pb-5">
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                         <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                       </svg>
                     </div>
                   </a>
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                         <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                       </svg>
                     </div>
                   </a>
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                         <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                         <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                       </svg>
                     </div>
                   </a>
                 </div>
               </div>
             </div>
           </div>
           <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
             <div className="rounded overflow-hidden shadow-md bg-white">
               <div className="absolute -mt-20 w-full flex justify-center">
                 <div className="h-32 w-32">
                   <img src="https://cdn.tuk.dev/assets/boy-smiling_23-2148155640.jpg" alt className="rounded-full object-cover h-full w-full shadow-md" />
                 </div>
               </div>
               <div className="px-6 mt-16">
                 <div className="font-bold text-3xl text-center pb-1">Dean Jones</div>
                 <p className="text-gray-800 text-sm text-center">Principal Software Engineer</p>
                 <p className="text-center text-gray-600 text-base pt-3 font-normal">An avid open-source developer who loves to be creative and inventive. I have 20 years of experience in the field.</p>
                 <div className="w-full flex justify-center pt-5 pb-5">
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                         <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                       </svg>
                     </div>
                   </a>
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                         <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                       </svg>
                     </div>
                   </a>
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                         <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                         <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                       </svg>
                     </div>
                   </a>
                 </div>
               </div>
             </div>
           </div>
           <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
             <div className="rounded overflow-hidden shadow-md bg-white">
               <div className="absolute -mt-20 w-full flex justify-center">
                 <div className="h-32 w-32">
                   <img src="https://cdn.tuk.dev/assets/blond-man-happy-expression_1194-2873.jpg" alt className="rounded-full object-cover h-full w-full shadow-md" />
                 </div>
               </div>
               <div className="px-6 mt-16">
                 <div className="font-bold text-3xl text-center pb-1">Rachel Adams</div>
                 <p className="text-gray-800 text-sm text-center">Product Design Head</p>
                 <p className="text-center text-gray-600 text-base pt-3 font-normal">Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.</p>
                 <div className="w-full flex justify-center pt-5 pb-5">
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                         <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                       </svg>
                     </div>
                   </a>
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                         <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                       </svg>
                     </div>
                   </a>
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                         <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                         <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                       </svg>
                     </div>
                   </a>
                 </div>
               </div>
             </div>
           </div>
           <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
             <div className="rounded overflow-hidden shadow-md bg-white">
               <div className="absolute -mt-20 w-full flex justify-center">
                 <div className="h-32 w-32">
                   <img src="https://cdn.tuk.dev/assets/photo-1570211776045-af3a51026f4a.jfif" alt className="rounded-full object-cover h-full w-full shadow-md" />
                 </div>
               </div>
               <div className="px-6 mt-16">
                 <div className="font-bold text-3xl text-center pb-1">Charles Keith</div>
                 <p className="text-gray-800 text-sm text-center">UX Designer</p>
                 <p className="text-center text-gray-600 text-base pt-3 font-normal">A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.</p>
                 <div className="w-full flex justify-center pt-5 pb-5">
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                         <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                       </svg>
                     </div>
                   </a>
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                         <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                       </svg>
                     </div>
                   </a>
                   <a href="javascript:void(0)" className="mx-5">
                     <div>
                       <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                         <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                         <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                         <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                       </svg>
                     </div>
                   </a>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div> */