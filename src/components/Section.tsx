import React, { PropsWithChildren } from 'react';
import { Box, Heading } from '@chakra-ui/react';
interface SectionProps {
  id: string;
  heading: string;
}

function Projects({ id, heading, children }: PropsWithChildren<SectionProps>) {
  return (
    <Box as='section' id={id}>
      <Heading as='h2' size='xl'>
        {heading}
      </Heading>
      {children}
    </Box>
  );
}

export default Projects;
