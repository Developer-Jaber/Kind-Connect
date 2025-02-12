
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
    <div className='mx-auto p-4 container'>
      <div className='my-10 hero'>
        <div className='text-center hero-content'>
          <div className='max-w-2xl'>
            <h1 className='font-bold text-4xl'>
              Urgent Volunteer Opportunities
            </h1>
            <p className='py-6'>
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
          <div key={index} className='bg-base-100 shadow-xl card card-compact'>
            <figure>
              <img
                src={post.thumbnail}
                alt={post.postTitle}
                className='w-full h-48 object-cover'
              />
            </figure>
            <div className='card-body'>
              <h2 className='card-title'>{post.postTitle}</h2>
              <p>
                <strong>Category:</strong> {post.category}
              </p>
              <p>
                <strong>Deadline:</strong>{' '}
                {new Date(post.deadline).toLocaleDateString()}
              </p>
              <div className='justify-end card-actions'>
                <Link to={`/all-volentiar-need-Post/details/${post._id}`} className='bg-[#98BDFE] font-bold text-lg btn'>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center my-20'>
        <Link to='/all-volentiar-need-Post' className='bg-[#98BDFE] px-10 font-bold text-xl btn'>
          See all
        </Link>
      </div>
    </div>
  )
}

export default VolunteerNeedsNow
