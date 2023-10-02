import React from "react";


class Navbar extends React.Component{
    render(){
        return(
            <>
                <div style={styles.nav}>
                    <div style={styles.title}>Movie App</div>
                    <div style={styles.cartContainer}>
                        <img src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt='Cart Item' style={styles.cartIcon}/>
                        <span style={styles.cartCount}>0</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar;

const styles = {
    nav:{
        height:70,
        backgroundColor:'#4267b2',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        position:'relative'
    },
    title:{
        fontSize:'30px',
        color:'#fff',
        fontWeight:600,
        fontFamily:'"Montserrat",sans-serif',
        textTransform:'uppercase',
        marginLeft:20
    },
    cartContainer:{
        position:'relative',
        cursor:'pointer'
    },
    cartIcon:{
        height:48,
        marginRight:20,
    },
    cartCount:{
        backgroundColor:"orange",
        borderRadius:'50%',
        padding:'4px 8px',
        position:'absolute',
        right:10,
        top:-5,
        fontSize:12
    }
}