import styled from 'styled-components'
import Card from './card/Card'
import  creations  from '../fakeapi/fakeapi'

import interactive from '../../images/mobile/image-interactive.jpg'
function Main(){
  return(
    <Container>
      <section className="introduction">
        <img src={ interactive } alt="" />

        <div className="introduction_desc">
          <h1>The leader in interactive vr</h1>
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses
            through digital experiences that bind to their brand.
          </p>
        </div>

      </section>
      <section className="creation">
        <h1>Our creation</h1>
        <span>see all</span>

        <div>
          {creations && creations.map( (creation) =>  <Card creation={creation} key={creation.id} />
          )}
        </div>
      </section>
    </Container>
    )
}
const Container = styled.main`

`

export default Main
