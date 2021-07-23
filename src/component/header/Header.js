import React,{useState} from 'react';
import styled from 'styled-components'
import Nav from '../nav/Nav'
import BurgerMenu from '../nav/BurgerMenu'


function Header(){
  const [active, setActive] = useState(false)
  const activeToggle = () => {
    setActive(!active)
  }

  return(
    <Container>
      <span className = 'Logo'>loopsider</span>
      <BurgerMenu active={active} activeToggle={activeToggle}/>
      
      <Nav active={ active } />
    </Container>
    )
}

const Container = styled.header`
  position:fixed;
  display:flex;
  align-items:center;
  width:100%;
  height:3em;
  font-size:1.2rem;
  color:white;
    font-family: 'Alata', sans-serif;

  span.Logo{
    z-index:10;
    font-family: 'Alata', sans-serif;
    font-weight:bold;
  }

  nav{
    position:absolute;
    top:0;
    right:0;
    transform:translateX(-100%);
    padding-top:3em;
    padding-left:1em;
    transition:0.3s;
    height:100vh;
    background-color:rgba(3,3,3,.8);
    width:100%;

    &.active{
      transform:translateX(0%);
    }

    @media(min-width:700px){
      position:relative;
      height:auto;
      width:auto;
      transform:none;
      padding:inherit;
      margin-left:auto;
      background-color:inherit;

    }
  }


`

export default Header
