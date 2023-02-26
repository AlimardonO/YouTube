import { Avatar, Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { color } from "../constants/color";
import moment from 'moment';
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
const VideoCard = ({ video }) => {
    return <Card sx={{
        width: { xs: '80vw', sm: '220px', md: '235px', lg: '259px' },
        boxShadow: 'none',
        borderRadius: "15px 15px 0 0",
        background: color.background_c,
    }}>
        <Link to={`/video/${video.id.videoId}`}>
            <CardMedia
                image={video?.snippet?.thumbnails?.high?.url}
                alt={video?.snippet?.title}
                sx={{
                    width: { xs: '80vw', sm: '220px', md: '230px', lg: '255px' },
                    height: { xs: '30vh', sm: '150px', md: '150px', lg: '150px' },
                    borderRadius: '15px',
                    background: '0f0f0f',
                }} />
        </Link>
        <CardContent sx={{ height: '200px', position: 'relative' }}>
            <Link to={`/channel/${video?.snippet?.channelId}`}>
                <Stack direction={'row'}
                    position={'absolute'}
                    bottom={'150px'}
                    alignItems={'center'}
                    gap={'5px'}
                >
                    <Avatar src={video?.snippet?.thumbnails?.high?.url} />
                </Stack>
            </Link>
            <Stack sx={{ ml: '50px', mb: '50px' }}>
                <Typography variant="subtitle1" fontWeight={'bold'} sx={{ color: '#fff', fontSize: '14px' }}>{video?.snippet?.title}</Typography>
                <Typography my={'5px'} sx={{ color: 'grey', fontSize: '12px' }}>{video?.snippet?.channelTitle} <CheckCircle sx={{ color: 'grey', fontSize: '12px' }} /></Typography>
                <Typography my={'5px'} sx={{ color: 'grey' }}>
                    {moment(video?.snippet?.publishedAt).fromNow()}
                </Typography>
            </Stack>
        </CardContent>
    </Card>
}

export default VideoCard