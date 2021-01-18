import axios from 'axios'

const Key = "AIzaSyCeDySzCrf9NzC_Ar4x6rLeLuqne9G2o_s"
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params:{
        key: Key,
        part: 'snippet',
        maxResults : 10
    }
})
