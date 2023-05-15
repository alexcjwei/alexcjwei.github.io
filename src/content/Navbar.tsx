import {
  Heading,
  HStack,
  ButtonGroup,
  Button,
  Link,
  Box,
  Flex,
} from '@chakra-ui/react';
import Socials from './Socials';

function Navbar() {
  return (
    <Box as='section'>
      <HStack
        spacing='10'
        justify='space-between'
        w='100%'
        as='nav'
        bg='bg-surface'
        boxShadow='sm'
      >
        <Flex justify='space-between' flex='1'>
          <Link href='#about'>
            <Heading as='h1' size='2xl'>
              Alex C. Wei
            </Heading>
          </Link>
          <ButtonGroup as='nav' variant='link' spacing='8'>
            {['Projects', 'Experiences', 'Contact'].map((name) => {
              return (
                <Button as='a' href={'#' + name.toLowerCase()}>
                  {name}
                </Button>
              );
            })}
          </ButtonGroup>
          <Socials />
        </Flex>
      </HStack>
    </Box>
  );
}

export default Navbar;
