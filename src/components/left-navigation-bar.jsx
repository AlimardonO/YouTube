import { Box, Typography } from "@mui/material";
import { color } from "../constants/color";
import HomeIcon from '@mui/icons-material/Home';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const LeftNav = () => {
  return <Box
    sx={{
      display: { xs: 'none', sm: 'none', md: 'block' },
      width: '270px',
      height: '100vh',
      backgroundColor: color.background_c,
    }}
  >
    <Box className="leftNavDiv">
      <HomeIcon className="leftNavIcons"/>
      <Typography>Home</Typography>
    </Box>
    <Box className="leftNavDiv">
      <SlowMotionVideoIcon className="leftNavIcons"/>
      <Typography>Shorts</Typography>
    </Box>
    <Box className="leftNavDiv">
      <SubscriptionsIcon className="leftNavIcons"/>
      <Typography>Subscriptions</Typography>
    </Box>
    <Box className="leftNavDiv">
      <VideoLibraryIcon className="leftNavIcons"/>
      <Typography>Library</Typography>
    </Box>
    <Box className="leftNavDiv">
      <HistoryIcon className="leftNavIcons"/>
      <Typography>History</Typography>
    </Box>
    <Box className="leftNavDiv">
      <SlideshowIcon className="leftNavIcons"/>
      <Typography>Your Videos</Typography>
    </Box>
    <Box className="leftNavDiv">
      <AccessTimeIcon className="leftNavIcons"/>
      <Typography>Watch Later</Typography>
    </Box>
    <Box className="leftNavDiv">
      <ThumbUpOffAltIcon className="leftNavIcons"/>
      <Typography>Liked Videos</Typography>
    </Box>
    <Box className="leftNavDiv">
      <KeyboardArrowDownIcon className="leftNavIcons"/>
      <Typography>Show more</Typography>
    </Box>
  </Box>
}

export default LeftNav