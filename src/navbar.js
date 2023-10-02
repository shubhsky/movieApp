import React from "react";
// import styled from 'styled-components';
import styles from './Navbar.module.css'


// Styled Component
// const Nav = styled.div`
//     height:70px;
//     background:linear-gradient(90deg, #003366, #007f5f);
//     display:flex;
//     justify-content:space-between;
//     align-items:center;
//     position:relative;
// `;

// const Title = styled.div`
//     font-size:30px;
//     color:white;
//     fontWeight:600;
//     font-family:"Montserrat",sans-serif;
//     text-transform:uppercase;
//     margin-left:20px;
//     &:hover{color:#07f;font-size:32px}
// `;

// const CartContainer = styled.div`
//     position:relative;
//     cursor:pointer
// `

// const CartIcon = styled.img`
//     height:48px;
//     margin-right:20px
// `

// const CartCount = styled.span`
//     background-color:${(props)=>props.color};
//     border-radius:50%;
//     padding:4px 8px;
//     position:absolute;
//     right:10px;
//     top:-5px;
//     font-size:12px;
//     visibility:${(props)=>props.show?'visible':'hidden'}
// `

class Navbar extends React.Component{
    render(){
        return(
            <>
                <div className={styles.nav}>
                    <div className={styles.title}>Movie App</div>
                    <div className={styles.cartIconContainer}>
                        <img className={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt='Cart Item' />
                        <span className={styles.cartCount} color='cyan' show={true}>0</span>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar;

