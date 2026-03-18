import { Box, Grid, Image } from '@chakra-ui/react';

const dummyData = [
  { id: '1', iconUrl: 'dummy/1.jpg', name: 'Gummy Bear' },
  { id: '2', iconUrl: 'dummy/2.jpg', name: 'Gummy Fox' },
  { id: '3', iconUrl: 'dummy/3.jpg', name: 'Cato' },
  { id: '4', iconUrl: 'dummy/4.jpg', name: 'Calm Fox' },
  { id: '5', iconUrl: 'dummy/5.jpg', name: 'Calm Fox' },
  { id: '6', iconUrl: 'dummy/6.jpg', name: 'Calm Fox' },
];

export const CTASection = () => {
  return (
    <Grid gap="2" templateColumns="repeat(2, 1fr)">
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
          display="flex"
          filter="drop-shadow(0 0 8px hsl(220deg 60% 50% / 0.4))"
          justifyContent="center"
          key={item.id}
          transition="all 0.2s ease"
        >
          <Image
            alt={item.name}
            height={140}
            objectFit="contain"
            src={item.iconUrl}
            width={140}
          />
        </Box>
      ))}
    </Grid>
  );
};
