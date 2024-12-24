import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'
import Home from '../Home/Home'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import Profile from '../Pages/Profile'
import VolunteerPostsPage from '../Pages/VolunteerPostsPage'
import Private from '../Private/Private'
import ErrorPage from '../Error/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/all-volentiar-need-Post',
        element: <VolunteerPostsPage></VolunteerPostsPage>
      },
      {
        path: '/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/signup',
        element: <RegisterPage></RegisterPage>
      },
      {
        path: '/user-profile',
        element: <Private><Profile></Profile></Private>
      }
    ]
  }
])

const Router = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default Router
