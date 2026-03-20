'use client';

import {
  Box,
  CloseButton,
  Dialog,
  Grid,
  Image,
  Portal,
} from '@chakra-ui/react';
import { useState } from 'react';

const dummyData = [
  { id: '1', iconUrl: 'dummy/1.jpg', name: 'Chill Gummy Bear' },
  { id: '2', iconUrl: 'dummy/2.jpg', name: 'Gummy Bear' },
  { id: '3', iconUrl: 'dummy/3.jpg', name: 'Angry Cato' },
  { id: '4', iconUrl: 'dummy/4.jpg', name: 'Calm Fox' },
  { id: '5', iconUrl: 'dummy/5.jpg', name: 'Smirking Fox' },
  { id: '6', iconUrl: 'dummy/6.jpg', name: 'Curious Fox' },
];

export const CTASection = () => {
  const [selected, setSelected] = useState<{
    id: string;
    iconUrl: string;
    name: string;
  } | null>(null);

  return (
    <>
      <Grid gap="3" templateColumns="repeat(2, 1fr)">
        {dummyData.map((item) => (
          <Box
            _hover={{
              transform: 'translateY(-4px) scale(1.03)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.25)',
              cursor: 'pointer',
            }}
            alignItems="center"
            borderRadius="lg"
            boxShadow="0 4px 12px rgba(0,0,0,0.15)"
            css={{
              WebkitFilter: 'drop-shadow(0 0 8px hsl(220deg 60% 50% / 0.4))',
            }}
            cursor="pointer"
            display="flex"
            filter="drop-shadow(0 0 8px hsl(220deg 60% 50% / 0.4))"
            justifyContent="center"
            key={item.id}
            onClick={() => setSelected(item)}
            overflow="hidden"
            transition="all 0.2s ease"
          >
            <Image
              _hover={{ transform: 'scale(1.1)' }}
              alt={item.name}
              h="140px"
              objectFit="contain"
              src={item.iconUrl}
              transition="transform 0.3s ease"
              w="100%"
            />
          </Box>
        ))}
      </Grid>

      <Dialog.Root
        onOpenChange={(e) => !e.open && setSelected(null)}
        open={!!selected}
      >
        <Portal>
          <Dialog.Backdrop backdropFilter="blur(6px)" bg="brand.glow" />

          <Dialog.Positioner>
            <Dialog.Content
              bg="text.primary"
              borderRadius="lg"
              boxShadow="0 20px 60px rgba(0,0,0,0.6)"
              maxW="400px"
              overflow="hidden"
              position="relative"
              w="90vw"
            >
              <Dialog.CloseTrigger asChild>
                <CloseButton
                  _hover={{
                    bg: 'brand.primary',
                    color: 'white',
                  }}
                  bg="bg.elevated"
                  borderRadius="full"
                  color="text.primary"
                  position="absolute"
                  right="8px"
                  size="md"
                  top="8px"
                  zIndex={1}
                />
              </Dialog.CloseTrigger>
              <Box display="flex" justifyContent="center" p="4">
                {selected && (
                  <Image
                    alt={selected.name}
                    borderRadius="lg"
                    maxH="60vh"
                    objectFit="contain"
                    src={selected.iconUrl}
                  />
                )}
              </Box>
              <Box
                color="brand.glow"
                fontWeight="semibold"
                pb="4"
                px="4"
                textAlign="center"
              >
                {selected?.name}
              </Box>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
};
