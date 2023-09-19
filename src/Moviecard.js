import React from "react";
import {avengers} from './images/index'

export class MovieCard extends React.Component{
    render(){
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="movieImage" src={avengers}/>
                    </div>
                    <div className="right">
                        <div className="title">The Avegers</div>
                        <div className="plot">Super Natural power shown in the movie.</div>
                        <div className="price">Rs. 199</div>
                        <div className="footer">
                            <div className="rating">8.9</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png"/>
                                <img className="star" alt="star" src="https://t4.ftcdn.net/jpg/00/61/25/93/240_F_61259351_3EL2WAZWZTXSQb1dPEzWu0yFLZNfIzFC.jpg"/>
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"/>
                                <span>0</span>
                            </div>
                            <button className="favourite-btn">Favourite</button>
                            <button className="cart-btn">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard