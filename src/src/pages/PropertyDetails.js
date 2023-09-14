import React, { useState, Fragment } from 'react';

import { housesData } from '../data';

import { useParams } from 'react-router-dom';

import { BiBed, BiBath, BiArea } from 'react-icons/bi';


import ScrollToTop from '../../src/pages/ScrollToTop';

import Image from '../assets/vorreiter.png'




import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
} from "@material-tailwind/react";
import { FaWhatsapp } from 'react-icons/fa';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';







 const PropertyDetails = () => {
  const { id } = useParams();
  const house = housesData.find(house => {
    return house.id === parseInt(id);
  });
  const [isOpen, setIsOpen] = useState(false);
  const [openNav, setOpenNav] = React.useState(false);
  const phoneNumber = '254720575833';



  const togglePopup = () => {
    setIsOpen(!isOpen);
  };


  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black">
      <Typography
        as="li"
        variant="small"
        color="violet"
        className="p-1 text-xl font-semibold whitespace-nowrap"
      >
        <a href="/Catalogue" className="flex items-center">
          Catalogue
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="violet"
        className="p-1 text-xl font-semibold whitespace-nowrap"
      >
        <a href="/About" className="flex items-center">
          About Us
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="violet"
        className="p-1 text-xl font-semibold whitespace-nowrap"
      >
        <a href="/Career" className="flex items-center">
          Careers
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="violet"
        className="p-1 text-xl font-semibold whitespace-nowrap"
      >
        <a href="/Contacts" className="flex items-center">
          Contact Us
        </a>
      </Typography>
      <Link
        to={`https://wa.me/${phoneNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-vorreiter text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        <FaWhatsapp className="inline-block mr-2" />
        Contact via WhatsApp
      </Link>
    </ul>
  );


  return  <section>
    <Navbar className="sticky  inset-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4   backdrop-blur-lg bg-opacity-30 border-none">
      <div className="flex items-center justify-between text-violet-900">
        <Typography
          as="a"
          href="/"
          className="flex items-center">
          <img src={Image} class="h-8 w-8 mr-3" alt="Flowbite Logo" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Vorreiter Real Estate</span>
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>

          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
      </MobileNav>
    </Navbar>
    <ScrollToTop>
      <div className='container mx-auto min-h-[800px] mb-14 mt-5'>
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
      </div>
    </ScrollToTop>
  </section>;
};

export default PropertyDetails;
