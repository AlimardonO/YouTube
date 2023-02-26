import { Avatar, Box, Chip, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"
import { ApiServices } from "./services/apiservice";
import ReactPlayer from "react-player";
import { CheckCircle, ThumbUpOffAlt } from "@mui/icons-material";
import moment from 'moment';
import { Comments, Loader, RelatedVideos } from "./";
const Video = () => {
  const [videoDetails, setVideoDetail] = useState([]);
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState([]);
  const [comentDetails, setComentDetails] = useState([]);
  const [relatedVideo, setRelatedVideo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiServices.fetching(`videos?part=snippet,statistics&id=${id}`);
        setVideoDetail(data.items[0]);
        const channelData = await ApiServices.fetching(`channels?part=snippet,statistics&id=${data.items[0].snippet.channelId}`);
        setChannelDetails(channelData.items[0]);
        const commentData = await ApiServices.fetching(`commentThreads?part=snippet&videoId=${id}`);
        setComentDetails(commentData.items);
        const relatedVideoData = await ApiServices.fetching(`search?part=snippet&relatedToVideoId=${id}&type=video`);
        setRelatedVideo(relatedVideoData);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [id]);
  if (!videoDetails?.snippet || !channelDetails?.snippet || !comentDetails || !relatedVideo.items) return <Loader />
  else {
    document.title = videoDetails.snippet.title;
    return (
      <Box minHeight='90vh' mb={10} pl={'15px'}>
        <Box display='flex' padding='15px 15px 10px 30px'>
          <Box sx={{
            width: { xs: '100%', sm: '100%', md: '66%' },
          }}>
            <ReactPlayer width='100%' className='react-player' url={`https://www.youtube.com/watch?v=${id}`} controls playing={true} />
            <Typography sx={{
              mt: '5px',
            }}>
              {videoDetails.snippet.title}
            </Typography>
            <Stack direction='row' py={1} px={2}>
              <Stack direction='row' alignItems='center' gap='5px' ml='-20px'>
                <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
                  <Avatar
                    alt={videoDetails.snippet.channelTitle}
                    src={channelDetails.snippet.thumbnails.high.url}
                  />
                </Link>
                <Typography variant='subtitle2'>
                  {videoDetails.snippet.channelTitle}
                  <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                  <Typography sx={{ fontSize: '11px', color: 'gray' }}>
                    {parseInt(channelDetails.statistics.subscriberCount).toLocaleString('en-US')} subscribers
                  </Typography>
                </Typography>
                <Stack sx={{ opacity: 0.7, ml: '50px' }} direction='row' alignItems='center' gap='3px'>
                  <Chip label={`${parseInt(videoDetails.statistics.likeCount).toLocaleString()}`} sx={{
                    background: '#272727',
                    p: '10px',
                    color: '#f1f1f1'
                  }}
                    icon={<ThumbUpOffAlt sx={{
                      color: '#f1f1f1 !important'
                    }} />}
                    onClick={() => console.log()} />
                </Stack>
              </Stack>
            </Stack>


            <Stack direction='row' gap='20px' alignItems='center' py={1} px={2} bgcolor='#272727' mt='15px'>
              <Stack direction='row' alignItems='center' gap='3px'>
                <Typography sx={{ fontSize: '13px', }}>
                  {parseInt(videoDetails.statistics.viewCount).toLocaleString()} views
                </Typography>
              </Stack>
              <Stack direction='row' alignItems='center' gap='3px'>
                <Typography my={'5px'} sx={{ color: '#f1f1f1', fontSize: '13px' }}>
                  {moment(videoDetails?.snippet?.publishedAt).fromNow()}
                </Typography>
              </Stack>
            </Stack>
            <Stack mt='20px'>
              <Typography>
                {parseInt(videoDetails.statistics.commentCount).toLocaleString('en-US')} Comments
              </Typography>
              <Box>
                {comentDetails.map(item => (
                  <Box key={item.id}>
                    <Comments comments={item.snippet.topLevelComment.snippet} />
                  </Box>
                ))}
              </Box>
            </Stack>
          </Box>
          <Box sx={{
            width: { md: '25%' },
            display: { xs: 'none', sm: 'none', md: 'block' },
          }} className='related-videos'>
            <RelatedVideos video={relatedVideo.items} />
          </Box>
        </Box>
      </Box>
    )
  }
}

export default Video