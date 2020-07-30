import React from 'react'

class Search extends React.Component{
    state = {term : ""}
    onInputChange = (event) =>{
        this.setState({term: event.target.value})
    }
    onFormSubmit = (event) => {
        event.preventDefault()
        
        this.props.onFormSubmit(this.state.term)
    }
    
    render(){
        return(
            <div className="container col-4">
                <form onSubmit={this.onFormSubmit} className=" Search-bar md-form mt-2">
                    <input 
                        className="form-control" 
                        type="text" 
                        placeholder="Video Search" 
                        aria-label="Search" 
                        value={this.state.term}
                        onChange = {this.onInputChange} />
                </form>
            </div>
        )
    }
}

export default Search
