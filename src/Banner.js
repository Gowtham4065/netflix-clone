import React, { Component } from 'react'
import axios from './axios'; 
import './Banner.css'

export class Banner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movies :[],
        };
      }

       componentWillMount() {
        const url = this.props.url;
        var request = null;
        const fetchData = async ()=>
        {
          request = await axios.get(url);
           this.setState({
            movies: request.data.results[Math.floor(Math.random()*request.data.results.length)]
          })
           return request;
        }
        fetchData();
        console.log("Test code");
     }

    render() {
        console.log(this.state.movies);
        return (
            <div>
               <header className="banner"  style={{
                   backgroundSize:"cover",backgroundImage:`url("https://image.tmdb.org/t/p/original/${this.state.movies.backdrop_path}")`,
                   backgroundPosition:"center center"
               }}>
                   <div className="banner_contents">
                      
                      <h1 className="banner_title">
                          {this.state.movies?.title || this.state.movies?.name || this.state.movies?.original_name}
                      </h1>
                      <div className="banner_buttons">
                            <button className="banner_button">Play</button>
                            <button className="banner_button">My List</button>
                      </div>
                      <h1 className="banner_description">{this.state.movies?.overview}</h1>
                   </div>
                   <div className="banner_fade"/>
                </header> 
            </div>
        )
    }
}

export default Banner
