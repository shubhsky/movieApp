import React from "react";
import {avengers} from './images/index'

export class MovieCard extends React.Component{
    


    render(){
        // destructuring
        // console.log(this.props)
        const {movie,addStars,decStars,handleFav}=this.props
        const {title,plot,price,rating,stars,fav,isIncart,poster} = this.props.movie;
        console.log(poster)
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="movieImage" src={poster}/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" onClick={()=>{decStars(movie)}}/>
                                <img className="star" alt="star" src="https://cdn-icons-png.flaticon.com/128/477/477406.png"/>
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" 
                                onClick={()=>{addStars(movie)}}/>
                                <span className="starCount">{stars}</span>
                            </div>

                            <button className={fav?"unfavourite-btn":'favourite-btn'} onClick={()=>handleFav(movie)}>{fav?"UnFavourite":'Favourite'}</button>

                            <button className={isIncart?"remove-cart":'cart-btn'} onClick={()=>this.props.handleCart(movie)}>{isIncart?'Remove from Cart':'Add to Cart'}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard