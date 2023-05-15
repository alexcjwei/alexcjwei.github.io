import { Heading, Text } from '@chakra-ui/react';
import { about } from '../data/data';

function About() {
  return (
    <section id='about'>
      <Heading as='h2' size='lg'>
        About
      </Heading>
      {about.map((about) => (
        <Text>{about}</Text>
      ))}
    </section>
  );
}

export default About;
