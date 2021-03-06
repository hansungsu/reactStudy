import React from 'react';
import './moive.css';


class Movie extends React.Component{
    render(){
        return(
            <div>
                <MoviePoster poster={this.props.poster}/>
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class MoviePoster extends React.Component{
    render(){
        return(
            <img src={this.props.poster}/>
        )
    }
}

export default Movie;
