import React, { Component } from 'react'
import YouTube from 'react-youtube';
import axios from './axios'; 
import './Row.css'
import movieTrailer from "movie-trailer";

const baseURL = "https://image.tmdb.org/t/p/original/";
 const opts ={
         height:"390",
         width:"100%",
         playerVars:{
             autoplay:1,
         }
         
     }
export default class Row extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies :[],
            trailerUrl:''
        };
      }
      

      componentWillMount() {
        const url = this.props.url;
        var request = null;
        console.log(url);
        const fetchData = async ()=>
        {
          request = await axios.get(url);
           console.log(request.data.results);
           this.setState({
            movies: request.data.results
          })
           return request;
        }
        fetchData();
       
     }
     handleClick(movie)
     {
         if(this.state.trailerUrl)
         {
             this.setState({
                 trailerUrl:''
             })
         }
         else
         {  
             console.log(movie.title);
             movieTrailer(movie?.title || "")
             .then((url)=>{
                 const urlParams = new URLSearchParams(new URL(url).search);
                 this.setState({
                 trailerUrl: urlParams.get("v")
             })
             });
           
         }
     }
    
    render() {
       
        return (
            <div className="row">
                <h2>{this.props.title}</h2>

                <div className="row_posters">
                  {this.state.movies.map(movie => {
                      return <img key={movie.id}
                       className={`row_poster ${this.props.largeRow?"row_large":''}`} src={`${baseURL}${this.props.largeRow?movie.poster_path:movie.backdrop_path}`} 
                       onClick={()=>this.handleClick(movie)}
                       alt={movie.name}></img>
                  })}
                </div>
                {this.state.trailerUrl && <YouTube videoId={this.state.trailerUrl} opts={opts}/>}
            </div>
        )
    }
}
