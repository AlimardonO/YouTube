import { CheckCircle } from "@mui/icons-material";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const ChannelCard = ({ video }) => {
    return (
        <Box sx={{
            boxShadow: 'none',
            borderRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: { xs: '300px', sm: '220px', md: '230px', lg: '255px' },
            height: '326px',
            margin: 'auto',
        }}>
            <Box>
                <Link to={`/channel/${video?.snippet?.channelId}`}>
                    <CardContent sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        textAlign: 'center',
                    }}>
                        <CardMedia image={video?.snippet?.thumbnails?.high?.url}
                            alt={video?.snippet?.title}
                            sx={{
                                borderRadius: '100%',
                                height: '180px',
                                width: '180px',
                                mb: 2,
                                border: '1px solid #e3e3e3'
                            }} />
                    </CardContent>
                </Link>
                <Typography variant="h6">
                    {video?.snippet?.title}{' '}
                    <CheckCircle sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
                </Typography>
                {video?.statistics?.subscriberCount && (
                    <Typography sx={{ fontSize: '15px', fontWeight: '500', color: 'gray' }}>
                        {parseInt(video.statistics.subscriberCount).toLocaleString("en-US")} Subscribers
                    </Typography>
                )}
            </Box>
        </Box>
    )
}

export default ChannelCard