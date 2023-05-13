import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import About from './content/About';
import Projects from './content/Projects';
import Header from './content/Header';
import Experiences from './content/Experiences';

function App() {
  return (
    <ChakraProvider>
      <div>
        <Header />
        <About />
        <Experiences />
        <Projects />
      </div>
    </ChakraProvider>
  );
}

export default App;
