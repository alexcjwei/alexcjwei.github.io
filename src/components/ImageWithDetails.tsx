import { useState } from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';

interface ImageWithDetailsProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
}

function ImageWithDetails({
  imageUrl,
  title,
  subtitle,
  description,
}: ImageWithDetailsProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      position='relative'
      width='100%'
      height='100%'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={imageUrl}
        objectFit='cover'
        width='100%'
        height='100%'
        opacity={isHovered ? 0.5 : 1}
        transition='opacity 0.3s ease'
      />
      {isHovered && (
        <Flex
          position='absolute'
          top={0}
          left={0}
          width='100%'
          height='100%'
          alignItems='center'
          justifyContent='center'
          backgroundColor='blackAlpha.500'
        >
          <Box textAlign='center'>
            <Text fontSize='lg' fontWeight='medium' mb={2}>
              {subtitle}
            </Text>
            <Text fontSize='xl' fontWeight='bold' mb={2}>
              {title}
            </Text>
            <Text fontSize='md'>{description}</Text>
          </Box>
        </Flex>
      )}
    </Box>
  );
}

export default ImageWithDetails;
