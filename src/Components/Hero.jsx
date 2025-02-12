import { Link } from "react-router-dom"
import Carousel from "./Carousel"

const Hero = () => {
  return (
    <div className='flex justify-between items-center gap-3 mx-auto w-11/12'>
      <div className='left w-6/12'>
        <div className='mt-5 ml-14 hero'>
          <div className='text-start hero-content'>
            <div className='max-w-xl'>
              <h1 className='font-bold text-5xl'>
                Empower Communities Through Volunteering
              </h1>
              <p className='py-6'>
                Join our platform to create and manage volunteer opportunities.
                Connect with passionate volunteers, make a difference in your
                community, and find the perfect opportunities to give back.
                Let's build a stronger, more connected world together.
              </p>
              <Link to="/signup" className='bg-[#98BDFE] font-bold text-xl btn'>Get Started</Link>
            </div>
          </div>
        </div>
        <div className='ml-80'>
          <img src='https://i.ibb.co/tC0s8YM/image.png' alt='' />
          <img
            className='ml-40'
            src='https://i.ibb.co/cbqBWnp/image.png'
            alt=''
          />
          {/* <img src="https://i.ibb.co/tHKz1yv/image.png" alt="" />
            <img src="https://i.ibb.co/vsQ2MxQ/image.png" alt="" /> */}
        </div>
      </div>
      <div className='right border-2 rounded-2xl w-6/12 h-96'>
            <Carousel></Carousel>
      </div>
    </div>
  )
}

export default Hero
