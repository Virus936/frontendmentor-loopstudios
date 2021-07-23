import styled from 'styled-components'
import {heroBanner} from '../fakeapi/fakeapi'
function Hero(){
  return(
    <Container>
      <div>
        Immersive experiences that deliver
      </div>
    </Container>
    )
}
const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  background-image:url('${heroBanner.mobile}');
  background-size:cover;
  height:100vh;
  div{
    text-transform:uppercase;
    max-width:400px;
    font-size:2.6em;
    font-family: 'Josefin Sans', sans-serif;
    color:white;
    border:solid;
    padding:.51em;

  }
`

export default Hero
