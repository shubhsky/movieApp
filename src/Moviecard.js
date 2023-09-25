import React from "react";
import {avengers} from './images/index'

export class MovieCard extends React.Component{
    

    // if we are using arrow function then we dont need to bind the this as it is already binded by arror func
    addStars=()=>{
        // this.state.stars += 0.5;
        // console.log(this.state.stars)


        // forms 1 of setState - here we can directly pass the object
        // this.setState({
        //     stars:this.state.stars + 0.5
        // });

        // second form to setState
        this.setState((prvState)=>{
            if (this.state.stars>=5){
                return
            }
            return {
                stars:prvState.stars + 0.5
            }
        });

    }
    decStars=()=>{
        if (this.state.stars<=0){
            return
        }
        this.setState({
            stars:this.state.stars -= 0.5
        })
    }

    handleFav =()=>{
        this.setState({
            fav: !this.state.fav
        })
    }

    handleCart=()=>{
        this.setState({
            isIncart:!this.state.isIncart
        })
    }

    render(){
        // destructuring
        const {title,plot,price,rating,stars,fav,isIncart} = this.props;
        return (
            <div className="main">
                <div className="movie-card">
                    <div className="left">
                        <img alt="movieImage" src={avengers}/>
                    </div>
                    <div className="right">
                        <div className="title">{title}</div>
                        <div className="plot">{plot}</div>
                        <div className="price">Rs. {price}</div>
                        <div className="footer">
                            <div className="rating">{rating}</div>
                            <div className="star-dis">
                                <img className="str-btn" alt="decrease" src="https://cdn-icons-png.flaticon.com/128/43/43625.png" onClick={this.decStars}/>
                                <img className="star" alt="star" src="https://t4.ftcdn.net/jpg/00/61/25/93/240_F_61259351_3EL2WAZWZTXSQb1dPEzWu0yFLZNfIzFC.jpg"/>
                                <img className="str-btn" alt="increase" src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png" onClick={this.addStars}/>
                                <span className="starCount">{stars}</span>
                            </div>
                            {/* {fav?<button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button>:<button className="favourite-btn" onClick={this.handleFav}>Favourite</button>} */}

                            <button className={fav?"unfavourite-btn":'favourite-btn'} onClick={this.handleFav}>{fav?"UnFavourite":'Favourite'}</button>

                            <button className={isIncart?"cart-btn":'remove-cart'} onClick={this.handleCart}>{isIncart?'Add to Cart':'Remove from Cart'}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard