import { Link } from "react-router-dom"

const RegisterPage = () => {
  return (
    <div className='flex justify-center items-center bg-gray-100 min-h-screen'>
      <div className='bg-white shadow-lg p-8 rounded-lg w-full max-w-md'>
        <h2 className='mb-6 font-bold text-2xl text-center'>
          Create an account
        </h2>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-700'>Name</label>
            <input
              type='text'
              name="name"
              className='mt-2 px-4 py-2 border rounded-md focus:ring-1 focus:ring-blue-600 w-full focus:outline-none'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Photo URL</label>
            <input
              type='text'
              name="pothoURL"
              className='mt-2 px-4 py-2 border rounded-md focus:ring-1 focus:ring-blue-600 w-full focus:outline-none'
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input
              type='email'
              name="email"
              className='mt-2 px-4 py-2 border rounded-md focus:ring-1 focus:ring-blue-600 w-full focus:outline-none'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700'>Password</label>
            <input
              type='password'
              name="password"
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
