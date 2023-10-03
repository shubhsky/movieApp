import MovieCard from "./Moviecard"
import { Component } from "react";

class MovieList extends Component{
    render(){
        // const {title, plot, price,poster, rating, stars, fav, isIncart}=this.state.movies;
        const {movies,addStars,decStars,handleCart,handleFav}=this.props;
        return(
            <>
                {movies.map((movie,index)=><MovieCard key={index} movie = {movie} addStars = {addStars} decStars = {decStars} 
                handleFav={handleFav} handleCart={handleCart}/>)}
            </>
        )
    }
}
export default MovieList;