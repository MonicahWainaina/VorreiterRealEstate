import React from "react";


import House from '../../../src/components/House';

import { housesData } from '../../../src/data';

import { Link } from 'react-router-dom';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";

import "pure-react-carousel/dist/react-carousel.es.css";

/* Install pure-react-carousel using -> npm i pure-react-carousel */

export default function Index() { 
    const housee1 = housesData.find(house => {
        return house.id === 1;
    });
    const housee2 = housesData.find(house => {
        return house.id === 2;
    });
    const housee3 = housesData.find(house => {
        return house.id === 3;
    });
    const housee4 = housesData.find(house => {
        return house.id === 4;
    });
    const housee5 = housesData.find(house => {
        return house.id === 5;
    });
    const housee6 = housesData.find(house => {
        return house.id === 6;
    });
    const housee7 = housesData.find(house => {
        return house.id === 7;
    });
    const housee8 = housesData.find(house => {
        return house.id === 8;
    });
    const housee9 = housesData.find(house => {
        return house.id === 9;
    });
    const housee10 = housesData.find(house => {
        return house.id === 10;
    });
    const housee11 = housesData.find(house => {
        return house.id === 11;
    });
    const housee12 = housesData.find(house => {
        return house.id === 12;
    });

  
    return (
        <div className="container mx-auto">
            <div className="">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider className="lg:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={11} visibleSlides={4} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute  z-30 left-0 ml-8 focus:outline-none focus:bg-vorreiter focus:ring-2 focus:ring-offset-2 focus:ring-vorreiter cursor-pointer" id="prev">
                            <svg width={15} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee1.id}`}>
                                                <House house={housee1} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee2.id}`}>
                                                <House house={housee2} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee3.id}`}>
                                                <House house={housee3} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee4.id}`}>
                                                <House house={housee4} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee5.id}`}>
                                                <House house={housee5} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee6.id}`}>
                                                <House house={housee6} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee7.id}`}>
                                                <House house={housee7} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee8.id}`}>
                                                <House house={housee8} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee9.id}`}>
                                                <House house={housee9} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee10.id}`}>
                                                <House house={housee10} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee11.id}`}>
                                                <House house={housee11} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee12.id}`}>
                                                <House house={housee12} />
                                            </Link>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={15} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider className="lg:hidden md:block hidden" naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={2} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={15} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee1.id}`}>
                                                <House house={housee1} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee2.id}`}>
                                                <House house={housee2} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee3.id}`}>
                                                <House house={housee3} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee4.id}`}>
                                                <House house={housee4} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee5.id}`}>
                                                <House house={housee5} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee6.id}`}>
                                                <House house={housee6} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee7.id}`}>
                                                <House house={housee7} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee8.id}`}>
                                                <House house={housee8} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee9.id}`}>
                                                <House house={housee9} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee10.id}`}>
                                                <House house={housee10} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee11.id}`}>
                                                <House house={housee11} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee12.id}`}>
                                                <House house={housee12} />
                                            </Link>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className=" absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={15} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider className="block md:hidden " naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={12} visibleSlides={1} step={1} infinite={true}>
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className=" absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={15} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 md:gap-6 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                        <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee1.id}`}>
                                                <House house={housee1} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={1}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee2.id}`}>
                                                <House house={housee2} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={2}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee3.id}`}>
                                                <House house={housee3} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={3}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee4.id}`}>
                                                <House house={housee4} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={4}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee5.id}`}>
                                                <House house={housee5} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={5}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee6.id}`}>
                                                <House house={housee6} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={6}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee7.id}`}>
                                                <House house={housee7} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={7}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee8.id}`}>
                                                <House house={housee8} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={8}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee9.id}`}>
                                                <House house={housee9} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={9}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee10.id}`}>
                                                <House house={housee10} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={10}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee11.id}`}>
                                                <House house={housee11} />
                                            </Link>
                                        </div>
                                    </Slide>
                                    <Slide index={11}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                            <Link to={`/property/${housee12.id}`}>
                                                <House house={housee12} />
                                            </Link>
                                        </div>
                                    </Slide>
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className=" absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={15} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="black" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}