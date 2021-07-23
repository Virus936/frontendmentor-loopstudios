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
  @media(min-width:700px){
    display:flex;
  }

`
const NavElement = styled.div`

`

export default Nav
