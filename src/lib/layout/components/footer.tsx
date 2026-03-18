import { Flex, Link, Text } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Flex as="footer" justifyContent="center" width="full">
      <Text fontSize="sm">
        {new Date().getFullYear()} -{' '}
        <Link
          href="https://www.instagram.com/khaliunaa_sketches/"
          rel="noopener noreferrer"
          target="_blank"
        >
          khaliunaa_sketches,{' '}
          <Text as="span" color={'rgb(216 119 63)'}>
            Order here...
          </Text>
        </Link>
      </Text>
    </Flex>
  );
};
