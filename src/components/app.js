import React from 'react'
import Search from "./search"
import youtube from "../api/youtube"
import VideoList from "./videolist"
import VideoDetail from "./videoDetails"

class App extends React.Component{

    state = {videos: [], selectedVideo: null}

    
    onFormSubmit = async (term) =>{
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        })
        this.setState({videos: response.data.items})
       
    }

    onVideoSelect = (video) => {
        this.setState({selectedVideo: video})
        console.log("from app" , video)
    }

    render(){
        return(
            <div className="container">
                <Search onFormSubmit = {this.onFormSubmit} />   
                <div className="row">
                    <div className="col-md-9">
                        <VideoDetail selectedVideo = {this.state.selectedVideo} />
                    </div>
                    <div className="col-md-3">
                       <VideoList videos={this.state.videos} onVideoSelect={ this.onVideoSelect } />
                    </div>
                    
                </div>
                 
            </div>
        )
    }
}

export default App 