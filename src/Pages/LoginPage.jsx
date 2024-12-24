import { useContext } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'
import axios from 'axios'

const LoginPage = () => {
  const { loginWithGoogle, loginUser,user, setUser } = useContext(AuthContext)
  const location = useLocation();
  console.log(location);

  const handleLoginUser = e => {
    e.preventDefault()

    const form = e.target
    const email = form.email.value
    const password = form.password.value

    loginUser(email, password)
      .then(data => {
        const user = data.user;
        setUser(user)
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handlePopUpLogin = () => {
    loginWithGoogle()
      .then(result => {
        const newUser = result.user
        setUser(newUser)
        axios.post('http://localhost:5000/users',newUser)
        .then((data)=>{
          console.log(data);
        })
        .catch((error)=>{
          console.log(error);
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className='flex justify-center items-center bg-gray-100 min-h-screen'>
      <div className='bg-white shadow-lg p-8 rounded-lg w-full max-w-md'>
        <h2 className='mb-6 font-bold text-2xl text-center'>Log In</h2>
        <form onSubmit={handleLoginUser}>
          <input
            name='email'
            className='my-3 input-bordered w-full max-w-full input'
            type='text'
            placeholder='Enter your email'
          />
          <input
            name='password'
            className='my-3 input-bordered w-full max-w-full input'
            type='password'
            placeholder='Enter your password'
          />
          <button type='submit' className='bg-green-100 my-3 w-full btn'>
            Login
          </button>
        </form>
        <button
          onClick={handlePopUpLogin}
          className='flex justify-center items-center border-2 mb-4 px-4 py-2 rounded-md w-full'
        >
          <img
            src='https://img.icons8.com/color/48/000000/google-logo.png'
            alt='Google'
            className='mr-2 w-6 h-6'
          />
          Sign up with Google
        </button>
        <div className='flex justify-between mb-4'>
          <button className='flex justify-center items-center border-2 px-4 py-2 rounded-md w-1/4 text-white'>
            <img
              src='https://img.icons8.com/fluent/48/000000/facebook-new.png'
              alt='Facebook'
              className='w-6 h-6'
            />
          </button>
          <button className='flex justify-center items-center border-2 px-4 py-2 rounded-md w-1/4 text-white'>
            <img
              src='https://img.icons8.com/material-outlined/48/000000/github.png'
              alt='GitHub'
              className='w-6 h-6'
            />
          </button>
          <button className='flex justify-center items-center border-2 px-4 py-2 rounded-md w-1/4 text-white'>
            <img
              src='https://img.icons8.com/ios-filled/50/000000/email.png'
              alt='Email'
              className='w-6 h-6'
            />
          </button>
        </div>

        <p className='text-center text-gray-500 text-sm'>
          By continuing, you agree to VolunteerHub’s{' '}
          <a href='#' className='text-blue-500'>
            Terms of Service
          </a>{' '}
          and{' '}
          <a href='#' className='text-blue-500'>
            Privacy Policy
          </a>
          .
        </p>
        <p className='mt-4 text-center'>
          Ceate a new account?{' '}
          <Link to='/signup' className='text-blue-500'>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage
