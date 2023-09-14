import React from 'react'
import './blog.css'

const Blog = () => {
  return (
    <>
    <div id="blog" className="bg-gray-100 px-4 xl:px-0 py-12">
                <div className="mx-auto container">
                    <h1 className="text-2xl lg:text-6xl tracking-tight font-extrabold text-center text-gray-900">Market Reports</h1>
                    <div className="mt-12 lg:mt-24">
                        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                            <div>
                                <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(1).png" alt="computer" />
                                <div className="py-4 px-8 w-full flex justify-between bg-indigo-700">
                                    <p className="text-sm text-white font-semibold tracking-wide">Oct, 2023</p>
                                </div>
                                <div className="bg-white px-10 py-6 rounded-bl-3xl rounded-br-3xl">
                                    <h1 className="text-4xl text-gray-900 font-semibold tracking-wider">Nairobi</h1>
                                    <p className="text-gray-700 text-base lg:text-lg  lg:leading-8 tracking-wide mt-6 w-11/12">Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.Find the latest events updates or create events, concerts, conferences, workshops, exhibitions, and cultural events in all cities of the US. The aim of Eventistan is to promote healthy and entertaining event.</p>
                                    <div className="h-5 w-2" />
                                </div>
                            </div>
                            <div>
                                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                    <div>
                                        <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(2).png" alt="games" />
                                        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                            <p className="text-sm text-white font-semibold tracking-wide">Jan, 2022</p>
                                        </div>
                                        <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                            <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Rumuruti</h1>
                                            <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(3).png" alt="notes" />
                                        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                            <p className="text-sm text-white font-semibold tracking-wide">March, 2022</p>
                                        </div>
                                        <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                            <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Kiambu</h1>
                                            <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                                    <div>
                                        <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(4).png" alt="laptop" />
                                        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                            <p className="text-sm text-white font-semibold tracking-wide">Sept, 2023</p>
                                        </div>
                                        <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                            <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Nakuru</h1>
                                            <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img className="w-full" src="https://cdn.tuk.dev/assets/components/111220/Blg-6/blog(5).png" alt="worker" />
                                        <div className="py-2 px-4 w-full flex justify-between bg-indigo-700">
                                            <p className="text-sm text-white font-semibold tracking-wide">April, 2022</p>
                                        </div>
                                        <div className="bg-white px-3  lg:px-6 py-4 rounded-bl-3xl rounded-br-3xl">
                                            <h1 className="text-lg text-gray-900 font-semibold tracking-wider">Mombasa</h1>
                                            <p className="text-gray-700 text-sm  lg:text-base  lg:leading-8 pr-4 tracking-wide mt-2">Find the latest events updates or create events, concerts, conferences, workshops...</p>
                                        </div>
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

export default Blog