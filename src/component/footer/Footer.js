import Nav from '../nav/Nav'
import styled from 'styled-components'
function Footer(){
  return(
    <Container>
      <Wrapper>


        <div>
          <span className="Logo">loopsider</span>
          <Nav />
        </div>

        <div>
          <SocialMedia>
            <SocialElement>facebook</SocialElement>
            <SocialElement>twitter</SocialElement>
            <SocialElement>printeret</SocialElement>
            <SocialElement>instagram</SocialElement>
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
  marg
  margin:auto;
  padding-top:2em ;
  padding-bottom:2em ;
  
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
`
const SocialElement = styled.div`

`

export default Footer
