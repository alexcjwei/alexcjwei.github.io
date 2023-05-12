import React, { JSXElementConstructor, ReactElement } from 'react';
import { Link, IconButton, ButtonProps } from '@chakra-ui/react';

type LinkButtonProps = ButtonProps & {
  href: string;
  label: string;
  icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
};

const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  label,
  icon,
  children,
  ...rest
}) => {
  return (
    <Link href={href} isExternal>
      <IconButton aria-label='' icon={icon} {...rest}>
        {children}
      </IconButton>
    </Link>
  );
};

export default LinkButton;
