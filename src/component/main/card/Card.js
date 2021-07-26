import styled from 'styled-components'

function Card({ creation }){
  return(
    <Container>
      <img src={creation.desktop} srcSet={`${creation.mobile} 1000w, ${creation.desktop} 1900w`} alt="" />
      <p>{creation.title}</p>
    </Container>
    )
}

const Container = styled.div`
  position:relative;
  cursor:pointer;
  &>img{
    width:100%;
  }
  p{
    position:absolute;
    font-family:'Josefin Sans';
    left:1em;
    top:50%;
    color:white;
    transform:translateY(-50%);
    text-transform:uppercase;

  }
`

export default Card
