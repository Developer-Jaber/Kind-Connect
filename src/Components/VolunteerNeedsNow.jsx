
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const VolunteerNeedsNow = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://b10a11-server-side-developer-jaber.vercel.app/volunteer-needs-now')
      .then(res => res.json())
      .then(data => setPosts(data))
  }, [])

  return (
    <div className='mx-auto my-20 p-4 container'>
      <div className='my-10 hero'>
        <div className='text-center hero-content'>
          <div className='max-w-4xl'>
            <h1 className='font-bold text-2xl lg:text-5xl text-center'>
              Urgent Volunteer Opportunities
            </h1>
            <p className='py-8 text-lg text-center'>
              "Make a Difference Today! Discover volunteer opportunities with
              upcoming deadlines and join hands to support crucial causes. Each
              post highlights a pressing need in healthcare, education, social
              service, and more. Your timely contribution can create a
              significant impact. Act now and be the change!"
            </p>
          </div>
        </div>
      </div>

      <div className='gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto w-9/12'>
        {posts.map((post, index) => (
          <div key={index} className="group bg-base-100 shadow-lg hover:shadow-xl overflow-hidden transition-shadow duration-300 card">
          <figure className="relative overflow-hidden">
            {/* Image with hover zoom effect */}
            <img
              src={post.thumbnail || '/default-volunteer.jpg'} // fallback image
              alt={post.postTitle}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            
            {/* Urgency badge (conditional) */}
            {new Date(post.deadline) < new Date(Date.now() + 7*24*60*60*1000) && (
              <div className="top-4 right-4 absolute shadow-md font-bold text-white badge badge-error badge-lg">
                Urgent
              </div>
            )}
          </figure>
          
          <div className="p-6 card-body">
            {/* Title with gradient text */}
            <h2 className="bg-clip-text bg-gradient-to-r from-primary to-accent font-bold text-transparent text-2xl card-title">
              {post.postTitle}
            </h2>
            
            {/* Metadata grid */}
            <div className="gap-3 grid grid-cols-2 mt-2 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                </svg>
                <span className="font-medium">{post.category}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span className="font-medium">
                  {new Date(post.deadline).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </span>
              </div>
              
              <div className="flex items-center gap-2 col-span-2">
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="font-medium">{post.location || 'Remote'}</span>
              </div>
            </div>
            
            {/* Progress bar for volunteer spots */}
            <div className="mt-4">
              <div className="flex justify-between mb-1 text-gray-500 text-xs">
                <span>Volunteers Needed: {post.volunteersNeeded || 10}</span>
                <span>{post.volunteersRegistered || 0} Signed Up</span>
              </div>
              <progress 
                className="w-full h-2 progress progress-primary" 
                value={post.volunteersRegistered || 0} 
                max={post.volunteersNeeded || 10}
              ></progress>
            </div>
            
            {/* Action button with hover effect */}
            <div className="justify-end mt-6 card-actions">
              <Link 
                to={`/all-volentiar-need-Post/details/${post._id}`} 
                className="btn-block hover:bg-accent shadow-md hover:shadow-lg text-white transition-colors duration-300 btn btn-primary"
              >
                View Opportunity
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
        ))}
      </div>
      <div className='flex justify-center mt-16'>
        <Link to='/all-volentiar-need-Post' className='bg-[#98BDFE] px-10 font-bold text-xl btn'>
          See all
        </Link>
      </div>
    </div>
  )
}

export default VolunteerNeedsNow
