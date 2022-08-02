import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div id='footer' className='w-full bg-gray-100 py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>YATRA.</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4 px-4'>
            <a href="http://www.facebook.com/" target="_blank"><FaFacebook className='icon' /></a>
            <a href="http://www.twitter.com/" target="_blank"><FaTwitter className='icon' /></a>
            <a href="http://www.youtube.com/" target="_blank"><FaYoutube className='icon' /></a>
            <a href="http://www.pinterest.com/" target="_blank"><FaPinterest className='icon' /></a>
            <a href="http://www.instagram.com/" target="_blank"><FaInstagram className='icon' /></a>
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li><a href="/">About</a></li>
            <li><a href="/">Partnerships</a></li>
            <li><a href="/">Blogs</a></li>
            <li><a href="/">Advertising</a></li>
          </ul>
          <ul className='text-right lg:flex'>
            <li><a href="#hero">Home</a></li>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#explore">Explore</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="copyright text-center pt-4 pb-0 mb-0">
        <p>All rights reserved &copy; Team: TrailBlazers</p>
      </div>
    </div>
  );
};

export default Footer;
