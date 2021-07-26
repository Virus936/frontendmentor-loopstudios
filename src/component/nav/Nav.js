import styled from 'styled-components'

function Nav({active}){
  return(
    <Container className={active&&'active'}>
      <NavElement>About</NavElement>
      <NavElement>Careers</NavElement>
      <NavElement>Events</NavElement>
      <NavElement>Products</NavElement>
      <NavElement>Support</NavElement>
    </Container>
    )
}

const Container = styled.nav`
  display:flex;
  flex-direction:column;
  @media(min-width:700px){
    flex-direction:row;
    gap:1em;
  }

`
const NavElement = styled.div`
  position:relative;
  width:max-content;
  cursor:pointer;
  :hover{
    :after{
      position:absolute;
      bottom:-5px;
      right:0;
      content:'';
      width:100%;
      border:solid 1px;

    }
  }
  

`

export default Nav
