import { Flex, Grid, Heading, Text } from '@chakra-ui/react';

import { HelperImage } from './helper-image';

export const PageTitle = () => {
  return (
    <Grid textAlign="center">
      <Flex alignItems="center" gap={2} justifyContent="center">
        <HelperImage label="Lena" src="icons/title-logo.jpg" />
      </Flex>

      <Heading as="h1" fontWeight="bold" size="2xl">
        Sketches
      </Heading>

      <Text fontSize="xs"> made with love.</Text>
    </Grid>
  );
};
