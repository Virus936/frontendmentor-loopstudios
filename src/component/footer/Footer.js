import Nav from '../nav/Nav'
import styled from 'styled-components'
import { ReactComponent as Insta } from '../../images/icon-instagram.svg'
import { ReactComponent as Face } from '../../images/icon-facebook.svg'
import { ReactComponent as Twitter } from '../../images/icon-twitter.svg'
import { ReactComponent as Print } from '../../images/icon-pinterest.svg'

function Footer(){
  return(
    <Container>
      <Wrapper>

        <div>
          <span className="Logo">loopstudios</span>
          <Nav />
        </div>

        <div>
          <SocialMedia>
            <SocialElement> <Face fill='hsl(0,0%,55%)'/> </SocialElement>
            <SocialElement><Twitter fill='hsl(0,0%,55%)'/></SocialElement>
            <SocialElement><Print fill='hsl(0,0%,55%)'/></SocialElement>
            <SocialElement><Insta fill='hsl(0,0%,55%)' /></SocialElement>
          </SocialMedia>
          <p>@2021 Loopstudios. All rights reserved.</p>
        </div>

      </Wrapper>
    </Container>
    )
}

const Container = styled.footer`
  background-color:black;
  margin-top:2em;
`

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  max-width:min(max(800px,70%), 1000px);
  align-items:center;
  margin:auto;
  padding-top:2em ;
  padding-bottom:2em ;
  gap:1em;
  
  .Logo{
    font-size:1.2rem;
    cursor:pointer;
  }

  div{
    display:flex;
    flex-direction:column;
    align-items:center;

  }
  
  nav{
    align-items:center;
  }

  @media(min-width:700px){
    flex-direction:row;
    justify-content:space-between;
    &>div:nth-child(1){
      align-items:start;
    }
    &>div:nth-child(2){
      align-items:end;
    }
    }
  }



`
const SocialMedia = styled.ul`
  display:flex;
  flex-direction:row;

  gap:1em;
`
const SocialElement = styled.div`
  cursor:pointer;
`

export default Footer
