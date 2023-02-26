import { Box, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { color } from '../constants/color';
import { Searchbar } from '.';
import { logo } from './data';
const Navbar = () => {
  const onRenameTitleHandler = () => {
    document.title = 'YouTube';
  }
  const linkStyle = {
    textDecoration: "none",
    color: 'white',
  };
  return (
    <Stack
      direction='row'
      alignItems='center'
      justifyContent='space-between'
      padding={'10px 0 10px 0'} sx={{
        background: color.background_c, color: color.white,
      }}>
      <Link to={'/'} onClick={onRenameTitleHandler} style={linkStyle}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          ml: '50px',
        }}>
          <img src={logo} alt="logo" height={35} />
          <Typography fontWeight={'bold'}>YouTube</Typography>
        </Box>
      </Link>
      <Searchbar />
      <Box />
    </Stack>
  )
}

export default Navbar