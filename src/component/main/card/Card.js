import styled from 'styled-components'

function Card({ creation }){
  return(
    <Container>
      <img src={creation.mobile} alt="" />
      <p>{creation.title}</p>
    </Container>
    )
}

const Container = styled.div`

`

export default Card
