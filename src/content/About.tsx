import { Text } from '@chakra-ui/react';
import { about } from '../data/data';
import Section from '../components/Section';

function About() {
  return (
    <Section id='about' heading='About'>
      {about.map((about) => (
        <Text>{about}</Text>
      ))}
    </Section>
  );
}

export default About;
