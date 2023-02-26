import { useState } from 'react';
import { Stack, Box, Container } from '@mui/material';
import { Category, Videos, LeftNav } from './';
import { useEffect } from 'react';
import { ApiServices } from './services/apiservice';
import '@fontsource/roboto/400.css';
const Main = () => {
  const [categorySelected, setCategorySelected] = useState('All');
  const [video, setVideos] = useState([]);
  const categorySelectedHandler = (category) => setCategorySelected(category);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiServices.fetching(`search?part=snippet&q=${categorySelected}`);
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [categorySelected])
  return (
    <Stack>
      <Category categorySelectedHandler={categorySelectedHandler} categorySelected={categorySelected} />
      <Box p={'20px 0 0 0'} sx={{ height: '90vh' }}>
        <Container maxWidth='90%' sx={{
          display: 'flex'
        }}>
          <LeftNav />
          <Videos video={video} />
        </Container>
      </Box>
    </Stack>
  )
}
export default Main