import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { projects } from '../data/data';

function Projects() {
  return (
    <Box as='section' id='projects'>
      <Heading as='h2' size='lg'>
        Projects
      </Heading>
      <div className='project-gallery'>
        {projects.map((project) => {
          return (
            <Box>
              {project.subtitle}, {project.title}, {project.link},{' '}
              {project.description}
            </Box>
          );
        })}
      </div>
    </Box>
  );
}

export default Projects;
