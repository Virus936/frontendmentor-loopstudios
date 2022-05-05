import styled from 'styled-components';

function TitleSection({ children }) {
  return <Container>{children}</Container>;
}
const Container = styled.h1`
  text-align: center;
  text-transform: uppercase;
  font-family: 'Josefin Sans';
  margin-bottom: 2em;
  color: black;

  @media (min-width: 1000px) {
    text-align: left;
  }
`;

export default TitleSection;
