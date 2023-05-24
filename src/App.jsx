import React from 'react';
//components
import Navbar from './home/Navbar';
import Main from './home/Main';
import Footer from './home/Footer';
import Post from './components/Post';
import ScrollToTop from './ScrollToTop';

import { Container } from '@mui/material';

import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Container maxWidth='xl'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/:slug' element={<Post />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </Container>
  );
};

export default App;