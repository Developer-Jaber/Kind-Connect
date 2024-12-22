import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const Profile = () => {
    const {user, userLogOut} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOutUser = () => {
        userLogOut()
        .then(()=>{
            console.log('sign out succesfull...!');
            navigate('/home')
        })
    }
  return (
    <div className='flex justify-center items-center bg-gray-100 min-h-screen'>
      <div className='bg-white shadow-lg rounded-lg w-full max-w-3xl overflow-hidden'>
        <div
          className='bg-cover bg-center h-56'
          style={{
            backgroundImage: 'url(https://i.ibb.co/ZYsky6b/image.png)'
          }}
        >
          <div className='flex justify-end p-4'>
            <button className='bg-white hover:bg-gray-100 shadow-md px-4 py-2 rounded-lg font-bold text-gray-800'>
              Edit Profile
            </button>
          </div>
        </div>
        <div className='p-8'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <img
                className='border-4 border-white rounded-full w-24 h-24'
                src={user && user?.photoURL}
                alt='Profile'
              />
              <div className='ml-4'>
                <h2 className='font-bold text-2xl text-gray-900'>{user && user?.displayName}</h2>
                <p className='text-gray-600'>Software Developer</p>
                <p className='text-gray-600'>San Francisco, CA</p>
              </div>
            </div>
            <div className='text-gray-600'>
              <a href='#' className='mx-2'>
                <FaTwitter></FaTwitter>
              </a>
              <a href='#' className='mx-2'>
                <FaLinkedinIn></FaLinkedinIn>
              </a>
              <a href='#' className='mx-2'>
                <FaGithub></FaGithub>
              </a>
            </div>
          </div>
          <div className='mt-8'>
            <h3 className='font-bold text-gray-900 text-lg'>About Me</h3>
            <p className='mt-2 text-gray-600'>
              Hello! I am {user && user?.displayName}, a passionate software developer with over 5
              years of experience in building web applications. I specialize in
              JavaScript, React, and Node.js. I love to create and contribute to
              open-source projects in my free time.
            </p>
          </div>
          <button onClick={handleLogOutUser} className='mt-5 w-40 font-bold text-lg text-red-500 btn'>Log Out</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
