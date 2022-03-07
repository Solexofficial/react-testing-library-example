import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ErrorPage from '../pages/ErrorPage';
import HelloWorld from '../pages/HelloWorld';
import MainPage from '../pages/MainPage';
import UserDetailsPage from '../pages/UserDetailsPage';
import Users from '../users/Users';

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/users' element={<Users />} />
      <Route path='/users/:id' element={<UserDetailsPage />} />
      <Route path='/hello' element={<HelloWorld />} />
      <Route path='/*' element={<ErrorPage />} />
    </Routes>
  );
}

export default AppRouter;
