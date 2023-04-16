import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Users } from '../Components/Users'
import { AddUser } from '../Components/AddUser'

export const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Users />} />
                <Route path='/adduser' element={<AddUser />} />
            </Routes>
        </div>
    )
}
