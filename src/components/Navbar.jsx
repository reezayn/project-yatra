import React, {useState} from 'react'
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [logo, setLogo] = useState(false)
    const handleNav = () => {
        setNav(!nav)
        setLogo(!logo)
    }
  return (
    <>
    <div className='flex w-full justify-between items-center h-14 px-7 bg-gray-100 sticky top-0 z-50 '> 
    {/* add (absolute z-10 text-white) above after px-7 to get transparent navbar */}
    {/* add ( bg-white sticky top-0 z-50) above after px-7 to get fixed navbar */}
        <div>
            <h1 onClick={handleNav} className={logo ? 'hidden' : 'block '}><span className='hover:text-[#5651e5] cursor-pointer'>YATRA.</span></h1>
        </div>
        <ul className='text-xl text-black hidden md:flex'>
            <li><Link to='/#hero' className='rounded-3xl p-1 hover:text-[#5651e5]'>Home</Link ></li>
            <li><Link to="/#destinations" className='rounded-3xl p-1 hover:text-[#5651e5]'>Destinations</Link></li>
            <li><Link to="/#destinationsLast" className='rounded-3xl p-1 hover:text-[#5651e5]'>Explore</Link></li>
            <li><Link to="/#exploreLast" className='rounded-3xl p-1 hover:text-[#5651e5]'>Contact</Link></li>
        </ul>
{/* Hamburger */}
        <div onClick={handleNav} className='md:hidden z-10'>
            {nav ? <AiOutlineClose className='text-black' size={20} /> : <HiOutlineMenuAlt4 size={20} /> }
        </div>
{/* Mobile view */}
        <div onClick={handleNav} className={nav ? 'absolute text-black left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col' : 'hidden'}  >
            <ul>
            <h1 className='cursor-pointer'>YATRA.</h1>
            <li className='border-b'><Link to="/#hero">Home</Link ></li>
            <li className='border-b'><Link to="/#destinations">Destinations</Link></li>
            <li className='border-b'><Link to="/#destinationsLast">Explore</Link></li>
            <li className='border-b'><Link to="/#exploreLast">Contact</Link></li>
            <div className='flex justify-between my-6 mx-5'>
            <a href="http://www.facebook.com/" target="_blank"><FaFacebook className='icon' /></a >
            <a href="http://www.twitter.com/" target="_blank"><FaTwitter className='icon' /></a >
            <a href="http://www.youtube.com/" target="_blank"><FaYoutube className='icon' /></a >
            <a href="http://www.pinterest.com/" target="_blank"><FaPinterest className='icon' /></a >
            <a href="http://www.instagram.com/" target="_blank"><FaInstagram className='icon' /></a >
            </div>
            </ul>
        </div>
    </div>
    </>
  )
}

export default Navbar