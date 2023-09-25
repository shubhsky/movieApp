import MovieCard from "./Moviecard"

import { Component } from "react";

class MovieList extends Component{
    constructor(){
        super();
        this.state = {
            movies:[
                {
                  title: "The Shawshank Redemption",
                  plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                  poster:'',
                  price: 249.99,
                  rating: 9.3,
                  stars: 5,
                  fav: false,
                  isIncart: false,
                },
                {
                  title: "The Godfather",
                  plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                  poster:'',
                  price: 299.99,
                  rating: 9.2,
                  stars: 5,
                  fav: false,
                  isIncart: false,
                },
                {
                  title: "Pulp Fiction",
                  plot: "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                  poster:'',
                  price: 349.99,
                  rating: 8.9,
                  stars: 4,
                  fav: false,
                  isIncart: false,
                },
                {
                  title: "The Dark Knight",
                  plot: "When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
                  poster:'',
                  price: 269.99,
                  rating: 9.0,
                  stars: 4,
                  fav: false,
                  isIncart: false,
                },
                {
                  title: "Schindler's List",
                  plot: "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
                  poster:'',
                  price: 449.99,
                  rating: 8.9,
                  stars: 4,
                  fav: false,
                  isIncart: false,
                },
                {
                  title: "Forrest Gump",
                  plot: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold through the perspective of an Alabama man with an IQ of 75.",
                  poster:'',
                  price: 279.99,
                  rating: 8.8,
                  stars: 4,
                  fav: false,
                  isIncart: false,
                },
                {
                  title: "Inception",
                  plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
                  poster:'',
                  price: 399.99,
                  rating: 8.8,
                  stars: 4,
                  fav: false,
                  isIncart: false,
                },
                {
                  title: "Saving Private Ryan",
                  plot: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
                  poster:'',
                  price: 499.99,
                  rating: 8.6,
                  stars: 4,
                  fav: false,
                  isIncart: false,
                }
              ]
        }
        // this.addStars = this.addStars.bind(this)
        // this.decStars = this.decStars.bind(this)
    }

    handleIncStar=(movie)=>{
        const {movies} = this.state;
        const movieid=movies.indexOf(movie);
        if(movies[movieid].stars>=5){
            return;
        }
        movies[movieid].stars += 0.5
        this.setState({
            movies:movies
        })
    }

    handleDecStar=(movie)=>{
        const {movies} = this.state;
        const movieid=movies.indexOf(movie);
        if(movies[movieid].stars<=0){
            return;
        }
        movies[movieid].stars -= 0.5
        this.setState({
            movies:movies
        })
    }

    handleFav = (movie)=>{
        const {movies}= this.state;
        const movieid = movies.indexOf(movie)
        movies[movieid].fav = !movies[movieid].fav
        this.setState({
            movies
        })
    }
    
    handleCart = (movie)=>{
        const {movies}= this.state;
        const movieid = movies.indexOf(movie)
        movies[movieid].isIncart = !movies[movieid].isIncart
        this.setState({
            movies
        })
    }
    

    render(){
        // const {title, plot, price,poster, rating, stars, fav, isIncart}=this.state.movies;
        const {movies}=this.state;
        return(
            <>
                {movies.map((movie,index)=><MovieCard key={index} movies = {movie} addStars = {this.handleIncStar} decStars = {this.handleDecStar} handleFav={this.handleFav} handleCart={this.handleCart}/>)}
            </>
        )
    }
}
export default MovieList;