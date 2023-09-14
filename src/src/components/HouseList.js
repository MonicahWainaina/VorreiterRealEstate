import React, { useContext } from 'react';

import { HouseContext } from './HouseContext';

import House from './House';

import { Link } from 'react-router-dom';

import { ImSpinner2 } from 'react-icons/im';

import { AnimationOnScroll } from 'react-animation-on-scroll';


const HouseList = () => {
  const { houses, loading } = useContext(HouseContext);

  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-vorreiter text-4x1 mt-[200px]' />
    );
  }

  if (houses.length < 1) {
    return <div className='text-center text-3x1 text-gray-400 mt-48'>Sorry, nothing found</div>
  }

  return <section className='mb-20'>
    <div className=' container mx-auto'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
        {houses.map((house, index) => {
          return (
            <Link to={`/property/${house.id}`} key={index}>
              <House house={house} />
            </Link>
          )
        })}
      </div>
    </div>
  </section>;
};

export default HouseList;
