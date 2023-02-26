import { Box, Stack } from "@mui/material";
import { Loader } from "./";
import RelatedVideoCard from "./related-video-card";
const RelatedVideos = ({ video }) => {
    if (!video.length) return <Loader />
    return (
        <Stack
            width={"100%"}
            direction={"row"}
            flexWrap={"wrap"}
            justifyContent={"start"}
            alignItems={"center"}
            gap={2}
            padding={"0 0 0 25px"}
            className="myfrom"
        >
            {video.map(item => (
                <Box key={item.id.videoId}>
                    <RelatedVideoCard video={item}/>
                </Box>
            ))}
        </Stack>
    )
}

export default RelatedVideos