import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: process.env.REACT_APP_YOUTUBE,
    type: 'video',
  },
});
