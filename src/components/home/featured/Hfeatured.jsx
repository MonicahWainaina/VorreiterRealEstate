import React from 'react'
import './hfeatured.css'
import Carousel from '../about/Catalogue'
import { Link } from 'react-router-dom';
import { BiBed, BiBath, BiArea } from 'react-icons/bi';
import { housesData } from '../../../src/data';
import { AnimationOnScroll } from 'react-animation-on-scroll';


const Hfeatured = () => {
  const house = housesData.find(house => {
    return house.id === 1;
});
  return (
    <>
    <div>
    <div class="featured">
    <h2 class="mb-4 text-2xl lg:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-black"><span className='text-vorreiter'>Available</span> Listings</h2>
      <div className='mt-0'>
        <Carousel/>
        </div>
        <a href='/catalogue'><button className='btn1 text-white bg-vorreiter hover:bg-black focus:outline-none focus:ring-4 focus:ring-vorreiter font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mt-10  '>VIEW OUR CATALOGUE</button></a>
    </div>
    </div>
    </>
  )
}

export default Hfeatured
/*<h1 class="text-7xl text-center font-bold mt-8" ><span className='text-vorreiter'>Property of</span> the week</h1>
        <p class="text-xl text-center mt-9">Discover an oasis of tranquility with this week's exquisite property of the week.<br></br>
        The perfect balance between modern sophistication and classic charm.</p>
    <div className='container mx-auto min-h-[800px] mb-14 mt-0'>
      <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
        <div>
          <h2 className='text-2x1 font-semibold'>{house.name}</h2>
          <h3 className='text-lg mb-4'>{house.address}</h3>
        </div>
        <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
          <div className='bg-black text-white
           px-3 rounded-full'>
            {house.type}
          </div>
          <div className='bg-vorreiter text-white 
          px-3 rounded-full'>{house.country}</div>
        </div>
        <div className='text-3x1 font-semibold text-vorreiter'>
          $ {house.price}
        </div>
      </div>
      <div className='flex flex-col items-start gap-8 lg:flex-row'>
        <div className='max-w-[768px]'>
          <div className='mb-8'>
            <img src={house.imageLg} alt='' />
          </div>
          <div className='flex gap-x-6 text-vorreiter mb-6'>
            <div className='flex gap-x-2 items-center'>
              <BiBed className='text-2x1' />
              <div>{house.bedrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiBath className='text-2x1' />
              <div>{house.bathrooms}</div>
            </div>
            <div className='flex gap-x-2 items-center'>
              <BiArea className='text-2x1' />
              <div>{house.surface}</div>
            </div>
          </div>
          <div>{house.description}</div>
        </div>
        <div className='flex-1 bg-white w-full mb-8 border
        border-gray-300 rounded-lg px-6 py-8'>
          <div className='flex items-center gap-x-4 mb-8'>
            <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
              <img src={house.agent.image} alt='' />
            </div>
            <div>
              <div className='font-bold text-lg'>{house.agent.name}</div>
              <Link to='' className='text-vorreiter text-sm'>
                View Listings
              </Link>
            </div>
          </div>
          <form className='flex flex-col gap-y-4'>
            <input className='border border-gray-300 focus:border-vorreiter
            outline-none rounded w-full px-4 h-14 text-sm'  type='text' placeholder='Name*' />
            <input className='border border-gray-300 focus:border-vorreiter
            outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Email*' />
            <input className='border border-gray-300 focus:border-vorreiter
            outline-none rounded w-full px-4 h-14 text-sm' type='text' placeholder='Phone*' />
            <textarea className='border border-gray-300 focus:border-vorreiter outline-none resize-none
            rounded w-full p-4 h-36 text-sm text-gray-400' placeholder='Message*' defaultValue='Hello, I am interested in [Modern apartment]'></textarea>
            <div className='flex gap-x-2'>
              <button className='bg-vorreiter hover:bg-black text-white rounded p-4 text-sm w-full
              transition'>Send message</button>
              <button className='border border-vorreiter text-vorreiter hover:border-vorreiter hover:text-vorreiter
              rounded p-4 text-sm w-full transition'>Call</button>
            </div>
          </form>
        </div>
      </div>
      </div> */