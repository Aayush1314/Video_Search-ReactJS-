import React from 'react'

var VideoDetail = ( {selectedVideo} ) => {
    if (!selectedVideo){

        return (<div>LOADING!!</div>)
    }

    
    var URL = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`

    return(
        <div>
            <div className="embed-responsive embed-responsive-16by9 mt-3">
                <iframe title="Video Player" className="embed-responsive-item" src = {URL} allowFullScreen></iframe>
            </div>
        
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">{selectedVideo.snippet.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    )    
}

export default VideoDetail