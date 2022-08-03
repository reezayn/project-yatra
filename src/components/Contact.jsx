import React from 'react'
// import { HashLink as Link } from 'react-router-hash-link';


const Contact = () => {
  return (
    <>
    <body className='antialiased mb-10'>
      <div className='flex w-full justify-center items-center'>
        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 bg-[#4465f7] w-full max-w-4xl p-8 rounded-xl shadow-lg text-white'>

          <div className='flex flex-col space-y-8 justify-between'>
            <div>
              <h1 className='font-bold text-4xl tracking-wide'>Contact Us</h1>
              <p className='pt-2 text-cyan-100 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptatibus?</p>
            </div>

            <div className='flex flex-col space-y-5 text-xl'>
              <div className='inline-flex space-x-2 items-center'><ion-icon name="call" className='text-teal-300 text-xl'></ion-icon><span>(+977) 01 12345</span></div>
              <div className='inline-flex space-x-2 items-center'><ion-icon name="mail" className='text-teal-300 text-xl'></ion-icon><span>mail@yatra.com.np</span></div>
              <div className='inline-flex space-x-2 items-center'><ion-icon name="location" className='text-teal-300 text-xl'></ion-icon><span>XYZ road, Kathmandu, Nepal</span></div>
            </div>

            <div className='flex space-x-4 text-xl'>
              <div><a href="www.facebook.com"><ion-icon name="logo-facebook"></ion-icon></a></div>
              <div><a href="www.twitter.com"><ion-icon name="logo-twitter"></ion-icon></a></div>
              <div><a href="www.instagram.com"><ion-icon name="logo-instagram"></ion-icon></a></div>
            </div>
          </div>


          <div>
            <div className='bg-white rounded-xl shadow-lg p-8 text-black md:w-80'>
              <form action="" className='flex flex-col space-y-4'>
                <div>
                  <label htmlFor="name" className='text-sm'>Name</label>
                  <input type="text" placeholder='Your Name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-[#5651e5]'/>
                </div>
                <div>
                  <label htmlFor="email" className='text-sm'>Email</label>
                  <input type="email" placeholder='Your Email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-[#5651e5]'/>
                </div>
                <div>
                  <label htmlFor="message" className='text-sm'>Message</label>
                  <textarea placeholder='Your Message' rows='3' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-[#5651e5]'/>
                </div>
                
                <button className='inline-block self-end'>Submit</button>

              </form>
            </div>

          </div>

        </div>
      </div>
    </body>
    </>
  )
}

export default Contact