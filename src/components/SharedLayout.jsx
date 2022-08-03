import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import Footer from './Footer'


const SharedLayout = () => {
  return (
    <>
        <Navbar />
            <Outlet />
        <ScrollToTop />
        <Footer />
    </>
  )
}

export default SharedLayout