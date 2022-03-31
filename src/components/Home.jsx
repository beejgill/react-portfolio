import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

function Home() {
  return (
    <div name='home' className='bg-[#0a192f] h-screen w-full'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Brandon Gill</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Data Analyst.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm also interested in front-end development and data engineering. I love learning new things and building stuff.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                    View Work
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home