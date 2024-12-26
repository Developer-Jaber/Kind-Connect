import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../Provider/AuthProvider'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import UseAxiosSecure from '../Hooks/UseAxiosSecure'

const MyVolunteerNeedPosts = () => {
  const [volunteerNeedPosts, setVolunteerNeedPosts] = useState([])
  const { user } = useContext(AuthContext)
  const email = user.email
  const axiosSecure = UseAxiosSecure();

  
  useEffect(() => {
    const fetchData = async () => {
      const needPostsResponse = await axiosSecure.get(
        `/all-posts/email/${email}`
      )
      setVolunteerNeedPosts(needPostsResponse.data)
    }
    fetchData()
    
  }, [email])

  const handleDelete = async email => {
    await axios.delete(`http://localhost:5000/all-posts/email/${email}`)
    // Refresh the data after delete
    const needPostsResponse = await axios.get(
      `http://localhost:5000/all-posts/email/${email}`
    )
    setVolunteerNeedPosts(needPostsResponse.data)
  }

  return ( 
    <div>
      <div className='mx-auto py-10 container'>
        <h1 className='mb-8 font-bold text-3xl text-center'>
          My Volunteer Need Posts
        </h1>
        {volunteerNeedPosts.length === 0 ? (
          <p className='text-center text-lg'>
            You have not added any volunteer need posts yet.
          </p>
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
                {volunteerNeedPosts.map((post, index) => (
                  <tr key={post._id}>
                    <td>{index + 1}</td>
                    <td>{post.postTitle}</td>
                    <td>{post.description}</td>
                    <td>
                      <Link 
                        to={`/update-volunteer-need-post/${post._id}`}
                        className='mr-2 btn btn-primary btn-sm'
                      >
                        <FiEdit />
                      </Link>
                      <button
                        className='btn btn-error btn-sm'
                        onClick={() => handleDelete(post.organizerEmail)}
                      >
                        <FiTrash2 />
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

export default MyVolunteerNeedPosts
