import React from "react"
import VideoItem from "./videoitem"

var VideoList = ({videos, onVideoSelect}) =>{
    const RenderedList = videos.map((video) =>{
        return <VideoItem key = {video.id.videoId}  video = {video} videoSelect={ onVideoSelect }/>
    }) 
    console.log(RenderedList)
    return(
        <div >
            {RenderedList}
        </div>
    )
}

export default VideoList