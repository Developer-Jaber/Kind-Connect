import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../Provider/AuthProvider'
import { Link } from 'react-router-dom'
import useAxiosSecure from '../Hooks/useAxiosSecure'

const MyVolunteerRequestPost = () => {
  const [volunteerRequestPosts, setVolunteerRequestPosts] = useState([])
  const { user } = useContext(AuthContext)
  const email = user.email
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    // const fetchData = async () => {
    //   const needPostsResponse = await axios.get(
    //     `https://b10a11-server-side-developer-jaber.vercel.app/volenteers-request/email/${email}`
    //   )
    //   setVolunteerRequestPosts(needPostsResponse.data)
    // }

    // fetchData()
    axiosSecure.get(`/volenteers-request/email/${email}`)
    .then(res=>setVolunteerRequestPosts(res.data));
  }, [email])

  console.log(email);
  const handleDelete = async email => {
    await axios.delete(
      `https://b10a11-server-side-developer-jaber.vercel.app/volenteers-request/email/${email}`
    )
    // Refresh the data after delete
    const needPostsResponse = await axios.get(
      `https://b10a11-server-side-developer-jaber.vercel.app/volenteers-request/email/${email}`
    )
    setVolunteerRequestPosts(needPostsResponse.data)
  }

  return (
    <div>
      <div className='mx-auto py-10 container'>
        <h1 className='mb-8 font-bold text-3xl text-center'>
          My Volunteer Request Posts
        </h1>
        {volunteerRequestPosts.length === 0 ? (
          <div className='bg-white shadow-md p-6 rounded-lg min-h-screen text-center'>
            <h2 className='mb-4 font-semibold text-2xl'>
              No Volunteer Request Posts
            </h2>
            <p className='my-10 text-gray-700'>
              You have not added any volunteer request posts yet. Click the button
              below to add your first post.
            </p>
            <Link to='/all-volentiar-need-Post' className='bg-blue-500 hover:bg-blue-600 shadow-lg px-4 py-2 rounded font-semibold text-white transition duration-300'>
              Add Volunteer Need Post
            </Link>
          </div>
        ) : (
          <div className='overflow-x-auto'>
            <table className='w-full table'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {volunteerRequestPosts.map((post, index) => (
                  <tr key={post._id}>
                    <td>{index + 1}</td>
                    <td>{post.postTitle}</td>
                    <td>{post.description}</td>
                    <td>
                      <button
                        className='btn btn-error btn-sm'
                        onClick={() => handleDelete(post.volunteerEmail)}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyVolunteerRequestPost
