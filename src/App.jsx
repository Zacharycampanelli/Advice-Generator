import { Container } from '@chakra-ui/react';

import AdviceBox from './components/AdviceBox';
import './assets/styles/App.scss';

function App() {
  return (
    <Container m={2} >
   <AdviceBox />

   <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Zachary Campanelli</a>.
  </div>
    </Container>
  )
}

export default App
