import {
  Box,
  Heading,
  Image,
  VStack,
  Text,
  Link,
  ListItem,
  UnorderedList,
  Card,
  CardHeader,
  CardBody,
  Flex,
  SimpleGrid,
} from '@chakra-ui/react';
import React from 'react';
import { experiences } from '../data/data';

function Experiences() {
  return (
    <Box as='section' id='experiences'>
      <Heading as='h2'>Experiences</Heading>
      <SimpleGrid spacing={4}>
        {experiences.map((exp) => {
          return (
            <Card key={exp.company} size='lg'>
              <CardBody>
                <Flex>
                  {/* <Image src={exp.image} alt={exp.company} /> */}
                  <Link href={exp.website} isExternal fontWeight='bold'>
                    <Heading>{exp.company}</Heading>
                  </Link>
                </Flex>
                {exp.roles.map((role) => {
                  return (
                    <Box>
                      <Text>
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
          );
        })}
      </SimpleGrid>
    </Box>
  );
}

export default Experiences;
