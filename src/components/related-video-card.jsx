import { Box, Card, CardMedia, Stack, Typography } from "@mui/material";
import { color } from "../constants/color";
import moment from 'moment';
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
const RelatedVideoCard = ({ video }) => {
    return (
        <Box sx={{
            display: 'flex',
        }}>
            <Link to={`/video/${video.id.videoId}`}>
                <CardMedia
                    image={video?.snippet?.thumbnails?.high?.url}
                    alt={video?.snippet?.title}
                    sx={{
                        width: '150px',
                        height: '90px',
                        borderRadius: '15px',
                        background: '0f0f0f',
                    }} />
            </Link>
            <Card sx={{
                width: { xs: '300px', sm: '220px', md: '230px', lg: '255px' },
                boxShadow: 'none',
                borderRadius: "12px 12px 0 0",
                background: color.background_c,
            }}>
                <Stack sx={{ ml: '5px', display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' }, width: '95%'}}>
                    <Typography variant="subtitle1" fontWeight={'bold'} sx={{ color: '#fff', fontSize: '12px' }}>{video?.snippet?.title}</Typography>
                    <Typography sx={{ color: 'grey', fontSize: '12px' }}>{video?.snippet?.channelTitle} <CheckCircle sx={{ color: 'grey', fontSize: '12px' }} /></Typography>
                    <Typography sx={{ color: 'grey' }}>
                        {moment(video?.snippet?.publishedAt).fromNow()}
                    </Typography>
                </Stack>
            </Card>
        </Box>
    )
    // return <Card sx={{
    //     width: { xs: '300px', sm: '220px', md: '230px', lg: '255px' },
    //     boxShadow: 'none',
    //     borderRadius: "15px 15px 0 0",
    //     background: color.background_c,
    // }}>
    //     <CardContent sx={{ height: '200px', position: 'relative'}}>
    //         <>
    //             <Stack direction={'row'}
    //                 position={'absolute'}
    //                 bottom={'150px'}
    //                 alignItems={'center'}
    //                 gap={'5px'}
    //             >
    //                 <Avatar src={video?.snippet?.thumbnails?.high?.url} />
    //             </Stack>
    //         </>
    // <Stack sx={{ ml: '50px', mb: '50px' }}>
    //     <Typography variant="subtitle1" fontWeight={'bold'} sx={{ color: '#fff', fontSize: '14px' }}>{video?.snippet?.title}</Typography>
    //     <Typography my={'5px'} sx={{ color: 'grey', fontSize: '12px' }}>{video?.snippet?.channelTitle} <CheckCircle sx={{ color: 'grey', fontSize: '12px' }} /></Typography>
    //     <Typography my={'5px'} sx={{ color: 'grey' }}>
    //         {moment(video?.snippet?.publishedAt).fromNow()}
    //     </Typography>
    // </Stack>
    //     </CardContent>
    // </Card>
}

export default RelatedVideoCard