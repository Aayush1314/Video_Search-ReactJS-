import React from "react"
import './videoitem.css'



var VideoItem = ({ video, videoSelect }) =>{


    return(
        <div className="list-group-item list-group-item-action flex-column align-items-start video-item">
            <div onClick={ () => videoSelect(video) } className="d-flex w-100 justify-content-between">
                <img alt={ video.snippet.title } src={ video.snippet.thumbnails.default.url } className="mr-3" />
                <small className="mb-1 ">{ video.snippet.title }</small>    
            </div>
        </div>
        







            

    )
}

export default VideoItem