import React from "react"
import './videoitem.css'



var VideoItem = ({ video, videoSelect }) =>{


    return(
        
        <div onClick={ () => videoSelect(video) } className=" media mt-3">
            <img alt={ video.snippet.title } src={ video.snippet.thumbnails.default.url } className="mr-3" />
                <div className="media-body video-item">
                    <small className="mb-1 ">{ video.snippet.title }</small>
                </div>
        </div>








            

    )
}

export default VideoItem