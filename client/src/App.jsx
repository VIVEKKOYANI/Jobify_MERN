import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomeLayout, Landing, Register, Login, DashboardLayout, Error, AddJob, Starts, AllJobs, Profile, Admin } from './Pages'
import { action as registerAction } from './Pages/Register';
import { action as loginAction } from './Pages/Login';
import { loader as DashboardLoader } from './Pages/DashboardLayout';

export const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem('darkTheme') === 'true';
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme
}

checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />
      },
      {
        path: '/login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: '/register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        loader: DashboardLoader,
        children: [
          {
            index: true,
            element: <AddJob />
          },
          {
            path: 'starts',
            element: <Starts />
          },
          {
            path: 'all-jobs',
            element: <AllJobs />
          },
          {
            path: 'profile',
            element: <Profile />
          },
          {
            path: 'admin',
            element: <Admin />
          }
        ],
      },
    ]
  },
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App