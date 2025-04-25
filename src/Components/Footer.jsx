import React from 'react'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-gray-900 px-20 py-10 text-white'>
      <div className='flex md:flex-row flex-col justify-between mx-auto container'>
        <div className='mb-6 md:mb-0'>
          <h2 className='mb-2 font-bold text-2xl'>Kind Connect</h2>
          <p className='text-gray-400'>
            Connecting volunteers with those in need
          </p>
        </div>
        <div className='mb-6 md:mb-0'>
          <h3 className='mb-2 font-semibold text-xl'>Quick Links</h3>
          <ul>
            <li className='mb-1'>
              <a href='/about' className='hover:text-gray-300'>
                About Us
              </a>
            </li>
            <li className='mb-1'>
              <a href='/contact' className='hover:text-gray-300'>
                Contact
              </a>
            </li>
            <li className='mb-1'>
              <a href='/privacy' className='hover:text-gray-300'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='/terms' className='hover:text-gray-300'>
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div className='mb-6 md:mb-0'>
          <h3 className='mb-2 font-semibold text-xl'>Follow Us</h3>
          <div className='flex space-x-4'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-300'
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-300'
            >
              <FaTwitter></FaTwitter>
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-300'
            >
              <FaInstagram></FaInstagram>
            </a>
            <a
              href='https://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-gray-300'
            >
              <FaLinkedinIn></FaLinkedinIn>
            </a>
          </div>
        </div>
        <div>
          <h3 className='mb-2 font-semibold text-xl'>
            Subscribe to our Newsletter
          </h3>
          <form>
            <input
              type='email'
              placeholder='Enter your email'
              className='mb-2 px-4 py-2 rounded-md text-gray-900'
            />
            <button
              type='submit'
              className='block bg-blue-500 hover:bg-blue-600 py-2 rounded-md w-full text-white'
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className='mt-10 text-gray-400 text-center'>
        <p>
          &copy; {new Date().getFullYear()} Kind Connect. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
