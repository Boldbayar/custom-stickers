import { Flex } from '@chakra-ui/react';

import { BuyMeCoffee } from './components/buy-me-coffee';
import { CTASection } from './components/cta-section';
import { PageTitle } from './components/page-title';

export const Home = () => {
  return (
    <Flex
      alignItems="center"
      direction="column"
      gap={4}
      justifyContent="center"
      mb={8}
      minHeight="70vh"
      w="full"
    >
      <PageTitle />
      <CTASection />
      <BuyMeCoffee />
    </Flex>
  );
};
