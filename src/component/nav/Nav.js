import styled from 'styled-components'

function Nav(){
  return(
    <Container>
      <NavElement>About</NavElement>
      <NavElement>Careers</NavElement>
      <NavElement>Events</NavElement>
      <NavElement>Products</NavElement>
      <NavElement>Support</NavElement>
    </Container>
    )
}

const Container = styled.nav`

`
const NavElement = styled.div`

`

export default Nav
