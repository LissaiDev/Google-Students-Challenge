import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/global.css';

import { Home } from './pages/Home/';
import { SignIn } from './pages/SignIn';
import { Profile } from './pages/Profile';
import { Landing } from './pages/Landing';


export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' index element={<Landing/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}


