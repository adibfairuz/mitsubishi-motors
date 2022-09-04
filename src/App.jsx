import React from 'react'
import './App.css';
import Header from './containers/Header'
import Footer from './containers/Footer';
import Banner2 from './containers/Banner2';
import Container from './components/Container';
import Floating from './containers/Floating';
import Dealers from './containers/Dealers';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Dealers />
        <Banner2 />
      </Container>
      <Footer />
      <Floating />
    </>
  )
}

export default App