import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { About } from '../Pages/About';
import { Contacts } from '../Pages/Contacts';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';
import { Users } from '../Pages/Users';

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/login' element={<Login />} />
            <Route path='/user' element={<Users />} />
        </Routes>
    )
}