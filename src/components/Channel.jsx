import { useParams } from 'react-router-dom';
import { Avatar, Box, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { ApiServices } from './services/apiservice';
import Loader from './loader';
import LeftNav from './left-navigation-bar';
const Channel = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetails] = useState([]);
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiServices.fetching(`channels?part=snippet&id=${id}`);
        setChannelDetails(data);
        const dataVideo = await ApiServices.fetching(`search?channelId=${id}&part=snippet`);
        setVideos(dataVideo)
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [id]);
  if (!channelDetail.items) return <Loader />
  else {
    return (
      <Box sx={{
        minHeight: '95vh',
        display: 'flex'
      }}>
        <LeftNav />
        <Box width='100%'>
          <Box sx={{
            backgroundImage: `url(${channelDetail.items[0].brandingSettings.image.bannerExternalUrl})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            height: '170px',
            width: '100%'
          }}>
          </Box>
          <Box sx={{
            width: '100%',
            height: '100px',
            p: '15px 0 15px 0',
            display: 'flex'
          }}>
            <Avatar sx={{
              width: '75px',
              height: '75px',
              margin: '0 15px 0 15px'
            }} src={channelDetail.items[0].snippet.thumbnails.high.url} />
            <Box>
              <Typography fontSize='1.6rem'>
                {channelDetail.items[0].snippet.title}
              </Typography>
              <Typography sx={{
                fontSize: '13px',
                color: 'gray'
              }}>
                {channelDetail.items[0].snippet.customUrl}
              </Typography>
              <Typography sx={{
                fontSize: '13px',
                color: 'gray'
              }}>
                {channelDetail.items[0].statistics.subscriberCount} subscribers
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
}
export default Channel