import { FiSearch, FiUserPlus, FiHeart } from 'react-icons/fi'
import {
  FaCity,
  FaHandsHelping,
  FaUniversity,
  FaHospital
} from 'react-icons/fa'
import { PartnersCarousel } from './PartnerCarousel'


const ProcessAndPartners = () => {
  const partners = [
    { name: 'City Community Foundation', icon: <FaCity className='w-8 h-8' /> },
    { name: 'Helping Hands NGO', icon: <FaHandsHelping className='w-8 h-8' /> },
    { name: 'State University', icon: <FaUniversity className='w-8 h-8' /> },
    {
      name: 'Regional Medical Center',
      icon: <FaHospital className='w-8 h-8' />
    },
    {
      name: 'Green Earth Initiative',
      icon: <FaHandsHelping className='w-8 h-8' />
    },
    { name: 'Urban Youth Network', icon: <FaCity className='w-8 h-8' /> }
  ]

  return (
    <section className='bg-gray-50 py-20'>
      <div className='mx-auto px-4 container'>
        {/* How It Works Section */}
        <div className='mb-20 text-center'>
          <h2 className='font-bold text-2xl lg:text-5xl text-center'>
            How It Works
          </h2>
          <p className='mx-auto py-8 max-w-2xl text-lg text-center'>
            Join thousands of volunteers making a difference in just three
            simple steps
          </p>

          <div className='gap-8 grid grid-cols-1 md:grid-cols-3 py-12'>
            {/* Step 1 */}
            <div className='bg-white shadow-sm hover:shadow-md p-8 rounded-xl transition-shadow duration-300'>
              <div className='flex justify-center items-center bg-blue-100 mx-auto mb-6 rounded-full w-16 h-16'>
                <FiSearch className='w-8 h-8 text-blue-600' />
              </div>
              <h3 className='mb-3 font-semibold text-gray-900 text-2xl'>
                Discover
              </h3>
              <p className='text-gray-600'>
                Browse hundreds of volunteer opportunities tailored to your
                skills and interests
              </p>
              <div className='flex justify-center items-center mt-6 font-medium text-blue-600'>
                <span>Learn more</span>
                <svg
                  className='ml-2 w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  ></path>
                </svg>
              </div>
            </div>

            {/* Step 2 */}
            <div className='bg-white shadow-sm hover:shadow-md p-8 rounded-xl transition-shadow duration-300'>
              <div className='flex justify-center items-center bg-green-100 mx-auto mb-6 rounded-full w-16 h-16'>
                <FiUserPlus className='w-8 h-8 text-green-600' />
              </div>
              <h3 className='mb-3 font-semibold text-gray-900 text-2xl'>
                Sign Up
              </h3>
              <p className='text-gray-600'>
                Quick registration process with immediate access to all
                opportunities
              </p>
              <div className='flex justify-center items-center mt-6 font-medium text-green-600'>
                <span>Get started</span>
                <svg
                  className='ml-2 w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  ></path>
                </svg>
              </div>
            </div>

            {/* Step 3 */}
            <div className='bg-white shadow-sm hover:shadow-md p-8 rounded-xl transition-shadow duration-300'>
              <div className='flex justify-center items-center bg-purple-100 mx-auto mb-6 rounded-full w-16 h-16'>
                <FiHeart className='w-8 h-8 text-purple-600' />
              </div>
              <h3 className='mb-3 font-semibold text-gray-900 text-2xl'>
                Make a Difference
              </h3>
              <p className='text-gray-600'>
                Start volunteering and see the immediate impact of your
                contribution
              </p>
              <div className='flex justify-center items-center mt-6 font-medium text-purple-600'>
                <span>See impact</span>
                <svg
                  className='ml-2 w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M14 5l7 7m0 0l-7 7m7-7H3'
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Organizations Section */}
        <div className='text-center'>
          <h2 className='font-bold text-2xl lg:text-5xl text-center'>
            Our Trusted Partners
          </h2>
          <p className='mx-auto py-8 max-w-2xl text-lg text-center'>
            Collaborating with leading organizations to maximize community
            impact
          </p>

          <div className="gap-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 py-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex flex-col justify-center items-center bg-white shadow-sm hover:shadow-md p-6 rounded-lg transition-all duration-300"
              >
                <div className="mb-3 text-blue-600">
                  {partner.icon}
                </div>
                <h3 className="font-medium text-gray-700 text-sm text-center">
                  {partner.name}
                </h3>
              </div>
            ))}
          </div>
          {/* <section className='mx-auto container'>
            <PartnersCarousel partners={partners} />
          </section> */}
          <div className='mt-12'>
            <button className='inline-flex items-center bg-white hover:bg-gray-50 shadow-sm px-6 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-medium text-gray-700 text-base'>
              Become a Partner
              <svg
                className='-mr-1 ml-2 w-5 h-5'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M14 5l7 7m0 0l-7 7m7-7H3'
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessAndPartners
