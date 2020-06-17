import axios from 'axios';

const KEY = 'AIzaSyBctMqJetE2JCcPow_APW5nRFf6dyOq1aM';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
    type: 'video',
  },
});
