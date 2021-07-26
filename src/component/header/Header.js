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
    <Fixed>
      <Container>
        <span className = 'Logo'>loopsider</span>
        <BurgerMenu active={active} activeToggle={activeToggle}/>

        <Nav active={ active } />
      </Container>
    </Fixed>
  )
}
const Fixed = styled.header`

  position:fixed;
  z-index:99999;
  top:0;
  right:0;
  left:0;
`

const Container = styled.div`
  display:flex;
  align-items:center;
  height:3em;
  max-width:min(max(800px,70%),1000px);
  font-size:1.2rem;
  color:white;
  
  margin:auto;
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
    text-align:left;
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
