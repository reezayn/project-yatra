import React, {useState} from 'react'
import { Link } from "react-scroll";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }
  return (
    <div className='flex w-full justify-between items-center h-20 px-7 absolute z-10 text-white'>
        <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block '}><span className='hover:text-[#5651e5] cursor-pointer'>YATRA.</span></h1>
        </div>
        <ul className='hidden md:flex'>
            <li><a href='#hero' className='rounded-3xl p-1 hover:text-[#5651e5]'>Home</a></li>
            <li><a href="#destinations" className='rounded-3xl p-1 hover:text-[#5651e5]'>Destinations</a></li>
            <li><a href="#explore" className='rounded-3xl p-1 hover:text-[#5651e5]'>Explore</a></li>
            <li><a href="#footer" className='rounded-3xl p-1 hover:text-[#5651e5]'>Contact</a></li>
        </ul>
{/* Hamburger */}
        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} /> }
        </div>
{/* Mobile view */}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'hidden'}  >
            <ul>
            <h1 className='cursor-pointer'>YATRA.</h1>
            <li className='border-b'><a href="#hero">Home</a></li>
            <li className='border-b'><a href="#destinations">Destinations</a></li>
            <li className='border-b'><a href="#explore">Explore</a></li>
            <li className='border-b'><a href="#footer">Contact</a></li>
            <div className='flex justify-between my-6 mx-5'>
            <a href="http://www.facebook.com/" target="_blank"><FaFacebook className='icon' /></a>
            <a href="http://www.twitter.com/" target="_blank"><FaTwitter className='icon' /></a>
            <a href="http://www.youtube.com/" target="_blank"><FaYoutube className='icon' /></a>
            <a href="http://www.pinterest.com/" target="_blank"><FaPinterest className='icon' /></a>
            <a href="http://www.instagram.com/" target="_blank"><FaInstagram className='icon' /></a>
            </div>
            </ul>
        </div>

    </div>
  )
}

export default Navbar