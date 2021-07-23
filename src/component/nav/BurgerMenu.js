import styled from 'styled-components'
import {ReactComponent as IconClose } from '../../images/icon-close.svg'
import {ReactComponent as IconOpen } from '../../images/icon-hamburger.svg'

function BurgerMenu({activeToggle, active}){
  return(
    <Container className={active&&'active'} onClick={()=>activeToggle()}>
      {active?
        <IconClose fill='white'/>:
      <IconOpen fill='white' />
      }
    </Container>
    )
}
const Container = styled.div`
  margin-left:auto;
  z-index:10;
  @media(min-width:700px){
    display:none;
  }
`

export default BurgerMenu
