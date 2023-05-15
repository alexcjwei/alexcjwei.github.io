import React from 'react';
import { ChakraProvider, Container } from '@chakra-ui/react';
import About from './content/About';
import Projects from './content/Projects';
import NavBar from './content/Navbar';
import Experiences from './content/Experiences';
import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <NavBar />
      <About />
      <Projects />
      <Experiences />
    </ChakraProvider>
  );
}

export default App;
