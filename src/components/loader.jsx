import { Box, CircularProgress, Stack } from "@mui/material"

const Loader = () => {
    return <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70vh',
        width: '100vw'
    }}>
        <Stack>
            <CircularProgress />
        </Stack>
    </Box>
}

export default Loader