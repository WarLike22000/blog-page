import React, { useState } from 'react';
//styles
import './App.css';
//components
import Navbar from './home/Navbar';
import Main from './home/Main';
import Footer from './home/Footer';
import Post from './components/Post';
import ScrollToTop from './ScrollToTop';
import SignUp from './components/SignUp';
import Login from './components/Login';

import { Container } from '@mui/material';

import { Routes, Route } from 'react-router-dom';

const App = () => {

  const [checked, setChecked] = useState(false);
  
  const changeHandler = (e) => {
    setChecked(e.target.checked)
  }
  
  return (
    <div className={`${checked && 'dark'}`}>
      <div className='dark:bg-slate-900'>
        <Container maxWidth='xl'>
          <div className='fixed z-20 right-20 md:right-72 top-8'>
            <input id='toggle' type='checkbox' onChange={changeHandler}  />
            <label htmlFor='toggle' />
          </div>
            <Navbar checked={checked} />
            <Routes>
              <Route path='/' element={<Main checked={checked} />} />
              <Route path='/:slug' element={<Post checked={checked} />} />
              <Route path='/signUp' element={<SignUp />} />
              <Route path='/login' element={<Login />} />
            </Routes>
            <Footer />
            <ScrollToTop />
          </Container>
        </div>
      </div>
  );
};

export default App;