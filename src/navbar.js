import React from "react";
import styled from 'styled-components';


// Styled Component
const Nav = styled.div`
    height:70px;
    background-color:cadetblue;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative
`;

const Title = styled.div`
    font-size:30px;
    color:white;
    fontWeight:600;
    font-family:"Montserrat",sans-serif;
    text-transform:uppercase;
    margin-left:20px
`;

const CartContainer = styled.div`
    position:relative;
    cursor:pointer
`

const CartIcon = styled.img`
    height:48px;
    margin-right:20px
`

const CartCount = styled.span`
    background-color:orange;
    border-radius:50%;
    padding:4px 8px;
    position:absolute;
    right:10px;
    top:-5px;
    font-size:12px
`

class Navbar extends React.Component{
    render(){
        return(
            <>
                <Nav>
                    <Title>Movie App</Title>
                    <CartContainer>
                        <CartIcon src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt='Cart Item' />
                        <CartCount>0</CartCount>
                    </CartContainer>
                </Nav>
            </>
        )
    }
}

export default Navbar;

