import {
  Box,
  Heading,
  Text,
  Link,
  ListItem,
  UnorderedList,
  Card,
  CardBody,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import { experiences } from '../data/data';
import Section from '../components/Section';

function Experiences() {
  return (
    <Section id='experiences' heading='Experiences'>
      <SimpleGrid spacing={4}>
        {experiences.map((exp) => (
          <Card key={exp.company} size='lg'>
            <CardBody>
              <Flex>
                {/* <Image src={exp.image} alt={exp.company} /> */}
                <Link href={exp.website} isExternal fontWeight='bold'>
                  <Heading as='h3' size='lg'>
                    {exp.company}
                  </Heading>
                </Link>
              </Flex>
              {exp.roles.map((role) => {
                return (
                  <Box>
                    <Text fontWeight='bold'>
                      {role.role} ({role.date})
                    </Text>
                    <UnorderedList>
                      {role.bullets.map((bullet) => (
                        <ListItem>
                          <Text>{bullet}</Text>
                        </ListItem>
                      ))}
                    </UnorderedList>
                  </Box>
                );
              })}
            </CardBody>
          </Card>
        ))}
      </SimpleGrid>
    </Section>
  );
}

export default Experiences;
