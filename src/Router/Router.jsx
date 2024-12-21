import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '../Layouts/MainLayout'
import Home from '../Home/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/about',
            element: <Home></Home>
        }
    ]
  }
])

const Router = () => {
  return <RouterProvider router={router}></RouterProvider>
}

export default Router
