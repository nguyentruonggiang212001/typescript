import React from 'react'
import { Outlet } from 'react-router-dom';

export const LayoutAdmin = () => {
  return (
    <div>
        <h1>Hello admin</h1>
        <Outlet/>
    </div>
  )
}

export default LayoutAdmin;