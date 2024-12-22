import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'
import Home from '../Home/Home'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/about',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <LoginPage></LoginPage>
        },
        {
          path: '/signup',
          element: <RegisterPage></RegisterPage>
        }
    ]
  }
])

const Router = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default Router
