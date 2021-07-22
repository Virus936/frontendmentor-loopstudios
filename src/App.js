import './App.css';
import styled from 'styled-components'
import Header from './component/header/Header'
import Hero from './component/hero/Hero'
import Main from './component/main/Main'
import Footer from './component/footer/Footer'

function App() {
  return (
    <Container>
      <Header />
      <Hero />
      <Main />
      <Footer />
    

    </Container>
  );
}
const Container = styled.div`

`

export default App;
