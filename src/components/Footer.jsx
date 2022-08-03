import React from 'react';
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from 'react-icons/fa';
// import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <div id='footer' className='w-full bg-gray-100 py-5'>
      <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
        <div className='sm:flex text-center justify-between items-center'>
          <h1>YATRA.</h1>
          <div className='flex justify-between w-full sm:max-w-[280px] my-4 px-4'>
            <a href="http://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook className='icon' /></a>
            <a href="http://www.twitter.com/" target="_blank" rel="noreferrer"><FaTwitter className='icon' /></a>
            <a href="http://www.youtube.com/" target="_blank" rel="noreferrer"><FaYoutube className='icon' /></a>
            <a href="http://www.pinterest.com/" target="_blank" rel="noreferrer"><FaPinterest className='icon' /></a>
            <a href="http://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram className='icon' /></a>
          </div>
        </div>
        <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li><Link to="about">About</Link></li>
            <li><Link to="/">Partnerships</Link></li>
            <li><Link to="blogs">Blogs</Link></li>
            <li><Link to="/">Advertising</Link></li>
          </ul>
          <ul className='text-right lg:flex'>
            <li><Link to="/#hero">Home</Link></li>
            <li><Link to="/#destinations">Destinations</Link></li>
            <li><Link to="/#explore">Explore</Link></li>
            <li><Link to="/#footer">Contact</Link></li>
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
