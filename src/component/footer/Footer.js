import Nav from '../nav/Nav'
import styled from 'styled-components'
function Footer(){
  return(
    <Container>
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

    </Container>
    )
}

const Container = styled.footer`

`
const SocialMedia = styled.ul`

`
const SocialElement = styled.div`

`

export default Footer
