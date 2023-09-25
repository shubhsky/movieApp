import MovieCard from "./Moviecard"

import { Component } from "react";

class MovieList extends Component{
    constructor(){
        super();
        this.state = {
            title:'The Avengers!',
            plot:'Supernatural powers shown in the movie.',
            price:'199',
            rating:'8.9',
            stars: 0,
            fav:false,
            isIncart:false
        }
        // this.addStars = this.addStars.bind(this)
        // this.decStars = this.decStars.bind(this)
    }
    render(){
        const {title, plot, price, rating, stars, fav, isIncart}=this.state;
        return(
            <>
                <MovieCard title={title}
                           plot = {plot}
                           price = {price}
                           rating={rating}
                           stars={stars}
                           fav = {fav}
                           isIncart= {isIncart}/>
            </>
        )
    }
}
export default MovieList;