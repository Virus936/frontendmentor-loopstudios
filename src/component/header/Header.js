import styled from 'styled-components'
import Nav from '../nav/Nav'

function Header(){
  return(
    <Container>
      <span className = 'Logo'>Loopsider</span>
      <Nav />
    </Container>
    )
}

const Container = styled.header`

`

export default Header
