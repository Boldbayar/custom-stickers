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
          transform: 'translateY(-3px) scale(1.03)',
          boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
          cursor: 'pointer',
        }}
        bg="yellow.400"
        borderRadius="xl"
        boxShadow="0 4px 12px rgba(0,0,0,0.15)"
        color="black"
        css={{
          WebkitFilter: 'drop-shadow(0 0 8px hsl(40deg 100% 50% / 0.4))',
        }}
        cursor="pointer"
        filter="drop-shadow(0 0 8px hsl(40deg 100% 50% / 0.4))"
        fontWeight="bold"
        mt={6}
        px={6}
        py={4}
        textAlign="center"
        transition="all 0.2s ease"
      >
        ☕ Buy me a coffee
      </Box>
    </Link>
  );
};
