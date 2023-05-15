import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import About from './content/About';
import Projects from './content/Projects';
import Header from './content/Header';
import Experiences from './content/Experiences';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Container>
        <About />
        <Projects />
        <Experiences />
      </Container>
    </ChakraProvider>
  );
}

export default App;
