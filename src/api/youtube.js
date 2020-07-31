import axios from 'axios'

const Key = "AIzaSyAtwvZCpl1L6kCwmC8i9VZYJDp87y41iYM"
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        key: Key,
        part: 'snippet',
        maxResults : 5
    }
})
