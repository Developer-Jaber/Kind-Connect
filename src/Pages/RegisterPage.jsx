import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'
import axios from 'axios'

const RegisterPage = () => {
  const { createUser, setUser } = useContext(AuthContext)

  const handelCreateUser = e => {
    e.preventDefault()
    const form = e.target

    const name = form.name.value
    const pothoURL = form.pothoURL.value
    const email = form.email.value
    const password = form.password.value

    // const createdUser =  {name:name,pothoURL:pothoURL,email:email,password:password}

    createUser(email, password)
      .then(data => {
        const newUser = data.user
        setUser(newUser)
        axios
          .post('https://b10a11-server-side-developer-jaber.vercel.app/users', newUser)
          .then(data => {
            console.log(data)
          })
          .catch(error => {
            console.log(error)
          })
      })
      .catch(err => {
        console.log(err)
      })
  }
  return (
    <div className='flex justify-center items-center bg-gray-100 min-h-screen'>
      <div className='bg-white shadow-lg p-8 rounded-lg w-full max-w-md'>
        <h2 className='mb-6 font-bold text-2xl text-center'>
          Create an account
        </h2>
        <form onSubmit={handelCreateUser}>
          <div className='mb-4'>
            <label className='block text-gray-700'>Name</label>
            <input
              type='text'
              name='name'
              className='mt-2 px-4 py-2 border rounded-md focus:ring-1 focus:ring-blue-600 w-full focus:outline-none'
              //   required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Photo URL</label>
            <input
              type='text'
              name='pothoURL'
              className='mt-2 px-4 py-2 border rounded-md focus:ring-1 focus:ring-blue-600 w-full focus:outline-none'
              //   required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input
              type='email'
              name='email'
              className='mt-2 px-4 py-2 border rounded-md focus:ring-1 focus:ring-blue-600 w-full focus:outline-none'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Password</label>
            <input
              type='password'
              name='password'
              className='mt-2 px-4 py-2 border rounded-md focus:ring-1 focus:ring-blue-600 w-full focus:outline-none'
              required
            />
          </div>
          <button
            type='submit'
            className='bg-blue-500 px-4 py-2 rounded-md w-full text-white'
          >
            Register
          </button>
        </form>
        <p className='mt-4 text-center'>
          Already have an account?{' '}
          <Link to='/login' className='text-blue-500'>
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage
