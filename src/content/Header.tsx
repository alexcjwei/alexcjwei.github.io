import {
  Heading,
  Box,
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
        <Heading as='h1'>Alex C. Wei</Heading>
        <Spacer />
        <ButtonGroup as='nav' variant='link' spacing='5'>
          {['About', 'Projects', 'Experiences', 'Contact'].map((name) => {
            return (
              <Button as='a' href={'#' + name.toLowerCase()}>
                {name}
              </Button>
            );
          })}
        </ButtonGroup>
        <Spacer />
        <Socials />
      </HStack>
    </Box>
  );
}

export default Header;
