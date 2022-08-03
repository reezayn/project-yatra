import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import bgVid from "../assets/bgVid.mp4";

const Hero = () => {
  return (
    <>
    <div id='hero' className='w-full h-screen relative'>
        <video
        className='w-full h-full object-cover' 
        autoPlay
        loop
        muted
        src={bgVid} />
        <div className='absolute w-full h-full top-0 left-0 bg-gray-900/50'></div>
        <div className="absolute top-0 w-full h-full flex flex-col justify-center text-center text-white p-4">
            <h1>Explore Nepal through <span>Yatra</span></h1>
            <h3 className='py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, numquam.</h3>
            <form action="#" className='flex justify-between items-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90'>
                <div>
                    <input className='bg-transparent w-[300px] sm:w-[400px] focus:outline-none px-1' type="text" placeholder='Where do you wanna explore today?' />
                </div>
                <div>
                    <button> <AiOutlineSearch size={20} /> </button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Hero