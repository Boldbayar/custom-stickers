'use client';

import {
  Box,
  CloseButton,
  Dialog,
  Grid,
  IconButton,
  Image,
  Portal,
} from '@chakra-ui/react';
import { useState } from 'react';
import { LuArrowRight } from 'react-icons/lu';

import { PixelEditor } from '@/lib/layout/components/pixel-editor';

type StickerItem = {
  id: string;
  iconUrl: string;
  name: string;
  pixelData?: string;
  type?: 'pixel';
};

const dummyData: Array<StickerItem> = [
  { id: '1', iconUrl: 'dummy/1.jpg', name: 'Chill Gummy Bear' },
  { id: '2', iconUrl: 'dummy/2.jpg', name: 'Gummy Bear' },
  { id: '3', iconUrl: 'dummy/3.jpg', name: 'Angry Cato' },
  { id: '4', iconUrl: 'dummy/4.jpg', name: 'Calm Fox' },
  { id: '5', iconUrl: 'dummy/5.jpg', name: 'Smirking Fox' },
  { id: '6', iconUrl: 'dummy/6.jpg', name: 'Curious Fox' },
];

const pixelItem: StickerItem = {
  id: 'pixel',
  iconUrl: 'dummy/7.png',
  pixelData: 'dummy/7-pixel.png',
  name: 'Pixel Dog',
  type: 'pixel',
};

export const CTASection = () => {
  const [selected, setSelected] = useState<StickerItem | null>(null);
  const [pixelOpen, setPixelOpen] = useState(false);
  const [pixelImage, setPixelImage] = useState<string | null>(null);

  const items: Array<StickerItem> = [...dummyData, pixelItem];

  return (
    <>
      <Grid gap="3" templateColumns="repeat(2, 1fr)">
        {items.map((item) => {
          const isPixel = item.id === 'pixel';

          return (
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
              onClick={() => {
                if (item.type === 'pixel') {
                  setPixelImage(item.pixelData ?? item.iconUrl);
                  setPixelOpen(true);
                } else {
                  setSelected(item);
                }
              }}
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

              {isPixel && (
                <Box
                  bg="brand.primary"
                  borderRadius="md"
                  color="white"
                  fontSize="xs"
                  left="6px"
                  position="absolute"
                  px="2"
                  py="1"
                  top="6px"
                >
                  NEW
                </Box>
              )}
            </Box>
          );
        })}
      </Grid>

      <Dialog.Root
        closeOnInteractOutside={false}
        onOpenChange={(e) => {
          if (!e.open) {
            setPixelOpen(false);
            setPixelImage(null);
          }
        }}
        open={pixelOpen}
      >
        <Portal>
          <Dialog.Backdrop backdropFilter="blur(6px)" bg="rgba(0,0,0,0.7)" />

          <Dialog.Positioner>
            <Dialog.Content
              bg="text.primary"
              borderRadius="xl"
              maxW={{ base: '95vw', md: '700px', lg: '700px' }}
              minH="70vh"
              overflow="hidden"
              position="relative"
              w="95vw"
            >
              <Dialog.Header
                alignItems="center"
                borderBottom="1px solid"
                borderColor="bg.elevated"
                display="flex"
                justifyContent="space-between"
                px="4"
                py="3"
              >
                <Box color="text.primary" fontWeight="semibold">
                  Pixel Sticker
                </Box>

                <Dialog.CloseTrigger asChild>
                  <CloseButton
                    _hover={{
                      bg: 'brand.primary',
                      color: 'white',
                    }}
                    bg="bg.elevated"
                    borderRadius="full"
                    color="text.primary"
                    size="sm"
                  />
                </Dialog.CloseTrigger>
              </Dialog.Header>

              <Dialog.Body p="6">
                <Box display="flex" justifyContent="center">
                  <PixelEditor initialImage={pixelImage || undefined} />
                </Box>
              </Dialog.Body>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>

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
              <Dialog.Body>
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
              </Dialog.Body>

              <Dialog.Footer
                border="0.1px solid"
                borderColor="brand.glow"
                p="2"
              >
                <Box>
                  <IconButton
                    _hover={{
                      bg: 'brand.primary',
                      color: 'white',
                    }}
                    size="md"
                  >
                    <LuArrowRight />
                  </IconButton>
                </Box>
              </Dialog.Footer>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
    </>
  );
};
