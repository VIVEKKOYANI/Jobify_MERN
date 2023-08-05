import React from 'react'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <div>
      <nav>NavBar</nav>
      <Outlet />
    </div>
  )
}

export default HomeLayout