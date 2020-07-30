import axios from 'axios'

const Key = "AIzaSyAUCRAtsBJ0FUW0qsWus6vkTuwkCpyTh1g"
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        key: Key,
        part: 'snippet',
        maxResults : 5
    }
})
