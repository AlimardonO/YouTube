import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import { Search, Video, Navbar, Channel, Main } from '.';
export default function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/channel/:id' element={<Channel />} />
        <Route path='/video/:id' element={<Video />} />
        <Route path='/search/:id' element={<Search />} />
      </Routes>
    </Box>
  )
}