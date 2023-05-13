import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import About from './content/About';
import Projects from './content/Projects';
import Header from './content/Header';
import Experiences from './content/Experiences';

function App() {
  return (
    <ChakraProvider>
      <Container>
        <Header />
        <About />
        <Experiences />
        <Projects />
      </Container>
    </ChakraProvider>
  );
}

export default App;
