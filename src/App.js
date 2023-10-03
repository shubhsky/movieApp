import React from "react";
import MovieList from "./MovieList";
import Navbar from "./navbar";
import { movies } from "./moviesData";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
        movies:movies,
        cartCout:0
    }
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
    let {movies,cartCout}= this.state;
    const movieid = movies.indexOf(movie)
    movies[movieid].isIncart = !movies[movieid].isIncart

    if (movies[movieid].isIncart){
      cartCout += 1
    }else{
      cartCout -= 1
    }

    this.setState({
        movies,
        cartCout
    })

}
  render(){
    let {movies,cartCout} = this.state
    return(
      <>
        <Navbar cartCount={cartCout}/>
        <MovieList movies = {movies} addStars={this.handleIncStar} decStars = {this.handleDecStar} handleFav={this.handleFav} handleCart={this.handleCart}/>
      </>
    )
  }
}

export default App                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           