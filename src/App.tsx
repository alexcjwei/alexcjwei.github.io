import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import About from './components/About';
import Projects from './components/Projects';
import Header from './components/Header';

function App() {
  return (
    <ChakraProvider>
      <div>
        <Header />
        <About />
        <Projects />
      </div>
    </ChakraProvider>
  );
}

export default App;
