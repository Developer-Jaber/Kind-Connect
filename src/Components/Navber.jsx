import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'

const Navber = () => {
  const { user } = useContext(AuthContext)
  const link = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link to='all-volentiar-need-Post'>All volunteer Need posts</Link>
      </li>
      <li>
        <Link to='/add-volunteer-need-post'>Add volunteer Need post</Link>
      </li>
      {user && (
        <li>
          <details>
            <summary>Manage My Posts</summary>
            <ul className='p-2 w-72'>
              <li>
                <Link to='/my-volunteer-need-posts'>My Volunteer Need Post</Link>
              </li>
              <li>
                <Link to='/'>My Volunteer Request Post</Link>
              </li>
            </ul>
          </details>
        </li>
      )}
    </>
  )

  return (
    <div className='bg-base-100 mt-5 navbar'>
      <div className='navbar-start'>
        <div className='flex lg:hidden dropdown'>
          <div tabIndex={0} role='button' className='btn btn-circle btn-ghost'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='z-[1] bg-base-100 shadow mt-3 p-2 rounded-box w-52 dropdown-content menu menu-sm'
          >
            {link}
          </ul>
        </div>
        <a className='flex items-center gap-3'>
          <img
            className='w-14'
            src='https://i.ibb.co/XZWt25j/icons8-charity-96.png'
            alt=''
          />
          <span className='font-bold text-4xl'>Kind Connect</span>
        </a>
      </div>
      <div className='lg:flex hidden navbar-center'>
        <ul className='px-1 text-lg menu menu-horizontal'>{link}</ul>
      </div>
      <div className='gap-4 navbar-end'>
        <button className='btn btn-circle btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='w-5 h-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
        <button className='btn btn-circle btn-ghost'>
          <div className='indicator'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
              />
            </svg>
            <span className='badge badge-primary badge-xs indicator-item'></span>
          </div>
        </button>
        {user && user?.email ? (
          <Link to='/user-profile'>
            <img
              className='rounded-full w-12 cursor-pointer'
              src={user.photoURL}
              alt={user && user?.displayName}
            />
          </Link>
        ) : (
          <Link to='/login'>
            <img
              className='w-12'
              src='https://img.icons8.com/?size=100&id=HmQQr0jYHZxu&format=png&color=000000'
              alt=''
            />
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navber
