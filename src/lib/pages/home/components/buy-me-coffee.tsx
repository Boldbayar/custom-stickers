import { Box, Link } from '@chakra-ui/react';

export const BuyMeCoffee = () => {
  return (
    <Link
      _hover={{ textDecoration: 'none' }}
      display="inline-block"
      href="https://buymeacoffee.com/khaliunaa_sketches"
    >
      <Box
        _hover={{
          transform: 'translateY(-3px)',
          filter: `
        drop-shadow(2px 4px 8px hsl(40deg 100% 50% / 0.5))
        drop-shadow(4px 8px 16px hsl(40deg 100% 50% / 0.6))
      `,
        }}
        bg="yellow.400"
        borderRadius="xl"
        color="black"
        cursor="pointer"
        filter={`
      drop-shadow(1px 2px 3px hsl(40deg 100% 50% / 0.3))
      drop-shadow(2px 4px 6px hsl(40deg 100% 50% / 0.3))
    `}
        fontWeight="bold"
        mt={6}
        px={6}
        py={4}
        textAlign="center"
        transition="all 0.2s"
      >
        ☕ Buy me a coffee
      </Box>
    </Link>
  );
};
