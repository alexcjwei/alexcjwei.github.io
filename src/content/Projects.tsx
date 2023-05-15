import React from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import { projects } from '../data/data';
import ImageWithDetails from '../components/ImageWithDetails';
import Section from '../components/Section';

function Projects() {
  return (
    <Section id='projects' heading='Projects'>
      <SimpleGrid className='project-gallery'>
        {projects.map((project) => (
          <ImageWithDetails
            imageUrl={project.link}
            title={project.title}
            subtitle={project.subtitle}
            description={project.description}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
}

export default Projects;
