import styled from 'styled-components';
import { heroBanner } from '../fakeapi/fakeapi';
function Hero() {
  return (
    <Container>
      <Wrapper>
        <div>Immersive experiences that deliver</div>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('${heroBanner.mobile}');
  background-size: cover;
  height: 100vh;
  @media (min-width: 700px) {
    background-image: url('${heroBanner.desktop}');
    height: 70vh;
  }
`;

const Wrapper = styled.div`
  @media (min-width: 700px) {
    width: 100%;
    max-width: min(max(600px, 70%), 1000px);
  }
  div {
    text-transform: uppercase;
    max-width: 400px;
    font-size: 2.6em;
    font-family: 'Josefin Sans', sans-serif;
    color: white;
    border: solid;
    padding: 0.51em;
  }
`;
export default Hero;
