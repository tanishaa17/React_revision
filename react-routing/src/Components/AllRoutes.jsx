import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from "./PrivateRoute"
import { About } from '../Pages/About';
import { Contacts } from '../Pages/Contacts';
import { Home } from '../Pages/Home';
import { Login } from '../Pages/Login';
import { NotFound } from '../Pages/NotFound';
import { UserDetails } from '../Pages/UserDetails';
import { Users } from '../Pages/Users';

export const AllRoutes = () => {
    return (
        <Routes>

            <Route path='/' element={
                <PrivateRoute>
                    <Home />
                </PrivateRoute>
            } />
            <Route path='/about' element={
                <PrivateRoute>
                    <About />
                </PrivateRoute>
            } />
            <Route path='/contacts' element={
                <PrivateRoute>
                    <Contacts />
                </PrivateRoute>

            } />
            <Route path='/login' element={<Login />} />
            <Route path='/users' element={

                <PrivateRoute>
                    <Users />
                </PrivateRoute>
            } />
            <Route path='/users/:users_id' element={<UserDetails />} />
            <Route path='*' element={<NotFound />} />

        </Routes>
    )
}
