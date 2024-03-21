import React from 'react'
import Hero from '../components/Hero'
import Carousel from '../components/Carousel/Carousel'
import {Link as Anchor} from "react-router-dom"


function Home() {
  return (
    <>
    <main className="grow flex items-center flex-col flex-wrap gap-5 pb-5 h-full">
          <Hero></Hero>
          <div className="flex flex-col gap-5 px-1 py-5">
            <h2 className="text-2xl font-semibold">Find the perfect destination</h2>
            <p>Our app will help you find the perfect path for you next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.</p>
            <Anchor to="/cities" className='self-center w-2/4 lg:w-1/4'><button
              type="button"
              className="w-full hover:scale-105 inline-block rounded-full bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
              Cities
            </button></Anchor>
          </div>
          <Carousel></Carousel>
    </main>
    </>
  )
}

export default Home