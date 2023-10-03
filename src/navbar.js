import React from "react";
import styled from 'styled-components';


// Styled Component
const Nav = styled.div`
    height:70px;
    background:linear-gradient(90deg, #003366, #007f5f);
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
`;

const Title = styled.div`
    font-size:30px;
    color:white;
    fontWeight:600;
    font-family:"Montserrat",sans-serif;
    text-transform:uppercase;
    margin-left:20px;
    &:hover{color:#07f;font-size:32px}
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
    background-color:${(props)=>props.color};
    border-radius:50%;
    padding:4px 8px;
    position:absolute;
    right:10px;
    top:-5px;
    font-size:12px;
    visibility:${(props)=>props.show?'visible':'hidden'}
`

class Navbar extends React.Component{
    render(){
        const {cartCount} = this.props;
        return(
            <>
                <Nav>
                    <Title>Movie App</Title>
                    <CartContainer>
                        <CartIcon src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt='Cart Item' />
                        <CartCount color='cyan' show={'true'}>{cartCount}</CartCount>
                    </CartContainer>
                </Nav>
            </>
        )
    }
}

export default Navbar;

