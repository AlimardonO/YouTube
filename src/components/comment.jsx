import { Avatar, Box, IconButton, Typography } from "@mui/material"
import moment from 'moment';
import { ThumbUpOffAlt, ThumbDownOffAlt } from "@mui/icons-material";
const Comments = ({ comments }) => {
    return (
        <Box sx={{
            maxWidth: '100%',
            height: 'max-content',
            mt: '10px',
            display: 'flex',
            overflow: 'hidden'
        }}>
            <Avatar src={comments.authorProfileImageUrl} sx={{
                m: '15px 25px 15px 0px'
            }} />
            <Box sx={{
                mt: '10px',
                fontSize: '13px',
                display: 'flex',
                flexWrap: 'wrap'
            }}>
                <Typography>
                    {comments.authorDisplayName}
                </Typography>
                <Typography sx={{
                    color: 'grey',
                    fontSize: '12px',
                    mt: '5px',
                    ml: '10px'
                }}>
                    {moment(comments?.publishedAt).fromNow()}
                </Typography>
                <Typography width='100%' mt='10px'>
                    {comments?.textOriginal}
                </Typography>
                <IconButton sx={{
                    color: 'white',
                    mr: '40px',
                    p: '0',
                    mt: '10px'
                }}>
                    <ThumbUpOffAlt/>
                    <Typography sx={{
                        fontSize: '14px',
                        color: 'gray',
                        ml: '10px'
                    }}>
                        {comments.likeCount}
                    </Typography>
                </IconButton>
                <IconButton sx={{
                    color: 'white',
                    mt: '10px'
                }}>
                    <ThumbDownOffAlt />
                </IconButton>
            </Box>
        </Box>
    )
}

export default Comments