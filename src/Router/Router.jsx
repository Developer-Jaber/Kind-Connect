import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'
import Home from '../Home/Home'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import Profile from '../Pages/Profile'
import VolunteerPostsPage from '../Pages/VolunteerPostsPage'
import Private from '../Private/Private'
import ErrorPage from '../Error/ErrorPage'
import AddVolunteerNeedPost from '../Pages/AddVolunteerNeedPost '
import VolentiarNeedPostDetails from '../Pages/VolentiarNeedPostDetails'
import MyVolunteerNeedPosts from '../Pages/MyVolunteerNeedPosts'
import UpdateVolunteerNeedPosts from '../Pages/UpdateVolunteerNeedPosts'

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
        path: '/all-volentiar-need-Post/details/:id',
        element: <Private><VolentiarNeedPostDetails></VolentiarNeedPostDetails></Private>,
        loader: ({params})=>fetch(`http://localhost:5000/all-posts/${params.id}`)
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
      },
      {
        path: '/add-volunteer-need-post',
        element: <Private><AddVolunteerNeedPost></AddVolunteerNeedPost></Private>,
      },
      {
        path: '/my-volunteer-need-posts',
        element: <Private><MyVolunteerNeedPosts></MyVolunteerNeedPosts></Private>
      },
      {
        path: '/update-volunteer-need-post/:id',
        element: <Private><UpdateVolunteerNeedPosts></UpdateVolunteerNeedPosts></Private>,
        loader: ({params})=> fetch(`http://localhost:5000/all-posts/${params.id}`)
      }
    ]
  }
])

const Router = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default Router
