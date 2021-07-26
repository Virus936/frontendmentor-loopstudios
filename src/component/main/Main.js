import styled from 'styled-components'
import Card from './card/Card'
import  creations  from '../fakeapi/fakeapi'
import TitleSection from '../element/TitleSection'

import interactive from '../../images/mobile/image-interactive.jpg'
function Main(){
  return(
    <Container>
      
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

      <section className="introduction">
        <img src={ interactive } alt="" />

        <div className="introduction_desc">
          <TitleSection>The leader in interactive vr</TitleSection>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses
            through digital experiences that bind to their brand.
          </p>
        </div>

      </section>
      <section className="creation">
        <TitleSection>Our creations</TitleSection>

        <div>
          {creations && creations.map( (creation) =>  <Card creation={creation} key={creation.id} />
          )}
        </div>
        <span>see all</span>
      </section>
    </Container>
    )
}
const Container = styled.main`
  position:relative;
  max-width:min(max(600px,70%),1000px);
  margin:auto;
  .introduction{
    position:relative;
    img{
     max-width: 100%;
    }
    h1{
    margin-bottom:1em;
    }

    .introduction_desc{
      padding:2em 0;
      background-color:white;
      text-align:center;

      @media(min-width:1000px){
        position:absolute;
        width:400px;
        padding:2em;
        bottom:0;
        right:0;
        text-align:left;
      }
    }
  }
  section{
  margin-top:5em;
  }

  .creation{
    text-align:center;

    &>div{
      display:grid;
      gap:1em;
      margin-bottom:1rem;
      @media(min-width:1000px){
        grid-template-columns:repeat(4,1fr);
      }
    }
    span{
      border:solid;
      padding:.2rem .5rem;
      cursor:pointer;
    }
    @media(min-width:1000px){
      display:grid;
      grid-template-areas:
      "Title allButton"
      "content content" ;
      &>div{
        grid-area:content;
      }
      h1{
        grid-area:Title;
      }
      span{
        grid-areas:allButton;
        justify-self:end;
        align-self:start;
      }
    }

    
  }

`

export default Main
