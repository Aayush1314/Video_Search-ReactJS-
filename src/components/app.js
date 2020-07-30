import React from 'react'
import Search from "./search"
import youtube from "../api/youtube"

class App extends React.Component{

    state = {videos: [] }
    
    onFormSubmit = async (term) =>{
        const response = await youtube.get("/search", {
            params: {
                q: term
            }
        })
        this.setState({videos: response.data.items})
    }

    render(){
        return(
            <div>
                <Search onFormSubmit = {this.onFormSubmit}/>    
            </div>
        )
    }
}

export default App 