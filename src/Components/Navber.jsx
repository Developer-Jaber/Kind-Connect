import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'
import { FaMoon, FaSun } from 'react-icons/fa'

const Navber = () => {
  const { user } = useContext(AuthContext)
  const location = useLocation()

  // for scroll behaviour of navber
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // for dark & light them
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.setAttribute('data-theme', savedTheme)
    } else {
      setTheme('light')
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

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
                <Link to='/my-volunteer-need-posts'>
                  My Volunteer Need Post
                </Link>
              </li>
              <li>
                <Link to='/my-volunteer-request-posts'>
                  My Volunteer Request Post
                </Link>
              </li>
              <li>
                <Link to='/user-profile'>Profile</Link>
              </li>
            </ul>
          </details>
        </li>
      )}
    </>
  )

  return (
    <div
      className={`w-12/12 transition-all duration-300 navbar  ${
        scrolled
          ? 'bg-[#E8F3F8] shadow-md fixed top-0 left-0 z-50 px-5 lg:px-20'
          : 'bg-transparent'
      }`}
    >
      <div className='navbar-start'>
        <div className='lg:hidden flex dropdown'>
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
          <span className='font-bold text-xl lg:text-3xl'>Kind Connect</span>
        </a>
      </div>
      <div className='hidden lg:flex navbar-center'>
        <ul className='px-1 text-lg menu menu-horizontal'>{link}</ul>
      </div>
      <div className='gap-4 navbar-end'>
        <button
          onClick={toggleTheme}
          className='hidden lg:flex bg-primary p-2 rounded-full text-primary-content'
        >
          {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>
        <button className='hidden lg:flex btn btn-circle btn-ghost'>
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
              className='rounded-full w-8 lg:w-12 cursor-pointer'
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
