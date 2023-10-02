import React from "react";


class Navbar extends React.Component{
    render(){
        return(
            <>
                <div style={{
                    width: '100%',
                    height: '30px',
                    backgroundColor:'cadetblue',
                    display: 'flex',
                    justifyContent: 'space-between'
                }}>
                    <div className="title">Movie App</div>
                    <div>
                        <img alt='Cart Item' />
                        <span>0</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar;

const styles = {
    nav:{
        width: '100%',
        height: '30px',
        backgroundColor:'cadetblue',
        display: 'flex',
        justifyContent: 'space-between'
    }
}