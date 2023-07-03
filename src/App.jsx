import { useState } from 'react';
import { Container } from '@chakra-ui/react';

import AdviceBox from './components/AdviceBox';
// import './assets/styles/App.scss';
import attribution from './assets/styles/attribution.css'
function App() {


  return (
    <Container p={2} position="relative" height="auto">
      <AdviceBox />

      <div className="attribution">
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Zachary Campanelli</a>.
      </div>
    </Container>
  );
}

export default App;
