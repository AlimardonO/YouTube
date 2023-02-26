import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { ApiServices } from "./services/apiservice";
import { Box, Container } from "@mui/material";
import { Videos } from ".";
const Search = () => {
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiServices.fetching(`search?part=snippet&q=${id}`);
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, [id])
  return (
    <Box>
      <Container>
        <Videos video={videos} />
      </Container>
    </Box>
  )
}

export default Search