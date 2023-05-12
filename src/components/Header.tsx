import {
  Heading,
  Box,
  Link,
  Spacer,
  HStack,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import Socials from './Socials';

function Header() {
  return (
    <Box as='nav' bg='bg-surface'>
      <HStack spacing='10' justify='space-between'>
        <Heading as='h1'>Alex Wei</Heading>
        <Spacer />
        <ButtonGroup as='nav' variant='link' spacing='5'>
          <Button as='a' href='#about'>
            About
          </Button>
          <Button as='a' href='#experiences'>
            Experience
          </Button>
          <Button as='a' href='#projects'>
            Projects
          </Button>
          <Button as='a' href='#social-media'>
            Contact
          </Button>
        </ButtonGroup>
        <Spacer />
        <Socials />
      </HStack>
    </Box>
  );
}

export default Header;
