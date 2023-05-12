import { ButtonGroup } from '@chakra-ui/react';
import LinkButton from './LinkButton';
import { socials } from '../data/data';

function Socials() {
  return (
    <section id='social-media'>
      <ButtonGroup spacing={3}>
        {socials.map((social) => {
          return (
            <LinkButton
              href={social.link}
              label={social.label}
              icon={<social.icon />}
            />
          );
        })}
      </ButtonGroup>
    </section>
  );
}

export default Socials;
