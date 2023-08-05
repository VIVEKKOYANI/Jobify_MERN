import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {HomeLayout, Landing, Register, Login, DashboardLayout, Error} from './Pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App