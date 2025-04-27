import { Link } from "react-router-dom"
import Carousel from "./Carousel"

const Hero = () => {
  return (
    <div className='lg:flex justify-between items-center gap-3 mx-auto w-11/12'>
      <div className='left lg:w-6/12'>
        <div className='mt-5 lg:ml-14 hero'>
          <div className='text-start hero-content'>
            <div className='lg:max-w-xl'>
              <h1 className='font-bold text-2xl lg:text-5xl text-center lg:text-start'>
                Empower Communities Through Volunteering
              </h1>
              <p className='py-10 text-lg text-center lg:text-start'>
              "Join our platform to connect with passionate volunteers and manage impactful opportunities. Together, let’s build a stronger, more connected community."
              </p>
              <Link to="/signup" className='bg-[#98BDFE] lg:pr-[1.7rem] lg:pl-[1.7rem] lg:h-[3.4rem] text-lg btn'>Get Started</Link>
            </div>
          </div>
        </div>
        <div className='mt-5 ml-80'>
          <img src='https://i.ibb.co/tC0s8YM/image.png' alt='' />
          <img
            className='mt-10 ml-40'
            src='https://i.ibb.co/cbqBWnp/image.png'
            alt=''
          />
        </div>
      </div>
      <div className='right border-2 rounded-2xl lg:w-6/12 h-96'>
            <Carousel></Carousel>
      </div>
    </div>
  )
}

export default Hero
