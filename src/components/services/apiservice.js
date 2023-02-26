import axios from "axios";

const options = {
  params: {
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': '44eb96f2a5msh2f5cc278f577321p1327bcjsnef5cebf290b6',
    'X-RapidAPI-Host': "youtube-v31.p.rapidapi.com",
  },
}
export const ApiServices = {
  async fetching(url) {
    const response = await axios.get(`https://youtube-v31.p.rapidapi.com/${url}`, options)
    return response.data
  },
}
// 678667bc43msh7c15c8a38f6a9eep119ad0jsnd6f2592fa82e
// 44eb96f2a5msh2f5cc278f577321p1327bcjsnef5cebf290b6
// 40fd834932mshe9c45fca5ef62b1p1a34d5jsnbc5e3f3debbd
// 168b16d73cmsh450a158238c8041p169092jsnf2be553a7307