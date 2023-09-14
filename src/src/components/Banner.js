import React from 'react';
import Image from '../assets/house-banner.png';
import Search from '../../src/components/Search';
import Navbar from '../../../src/components/common/header/Navbar'




const Banner = () => {
  return ( 
    <>
    <Navbar/>
  <section className='h-full mt-7 max-h-[640px]'>
    <div className=' h-96 flex flex-col lg:flex-row'>
      <div className='lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center
      lg:text-left justify-center flex-1 px-4 lg:px-0'>
        <h1 className='text-4x1 lg:text-[58px] font-semibold leading-none mb-6'>
          <span className='text-vorreiter'>Vorreiter Real</span> Estate Catalogue
        </h1>
        <p className='max-w-[480px] mb-8'>
          Adipisicing minim dolor ullamco ea cupidatat tempor laboris et. Veniam eiusmod occaecat nulla fugiat laborum nostrud eiusmod duis. Anim qui veniam commodo nulla elit sit. Tempor cillum ut et exercitation tempor dolore cillum.
        </p>
      </div>
      <div className='hidden flex-1 lg:flex justify-end items-end'>
        <img src={Image} alt=''/>
      </div>
    </div>
    <Search/>
  </section>
  </>
  );
};

export default Banner;
