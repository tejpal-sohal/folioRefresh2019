import React from 'react';
import './App.scss';
import Loader from './Components/Loader'
import Nav from './Components/Navigation';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
import Console from './Components/Console';

function App() {
  return (
    <React.Fragment>
      <Loader/>
      <Nav />
      <Home />
      <About />
      <Portfolio />
      <Footer />
      <Console />
    </React.Fragment>
  );
}

export default App;
