import { Box, Grid, Image } from '@chakra-ui/react';

const dummyData = [
  {
    id: '1',
    iconUrl: 'dummy/1.jpg',
    name: 'Gummy Bear',
  },
  {
    id: '2',
    iconUrl: 'dummy/2.jpg',
    name: 'Gummy Fox',
  },
  {
    id: '3',
    iconUrl: 'dummy/3.jpg',
    name: 'Cato',
  },
  {
    id: '4',
    iconUrl: 'dummy/4.jpg',
    name: 'Calm Fox',
  },
  {
    id: '5',
    iconUrl: 'dummy/5.jpg',
    name: 'Calm Fox',
  },
  {
    id: '6',
    iconUrl: 'dummy/6.jpg',
    name: 'Calm Fox',
  },
];

export const CTASection = () => {
  return (
    <Grid gap="2" templateColumns="repeat(2, 1fr)">
      {dummyData.map((item) => (
        <Box
          _hover={{
            filter: `
              drop-shadow(2px 4px 6px hsl(220deg 60% 50% / 0.4))
              drop-shadow(4px 8px 16px hsl(220deg 60% 50% / 0.5))
            `,
            transform: 'translateY(-4px)',
          }}
          filter={`
            drop-shadow(1px 2px 3px hsl(220deg 60% 50% / 0.3))
            drop-shadow(2px 4px 6px hsl(220deg 60% 50% / 0.3))
            drop-shadow(4px 8px 12px hsl(220deg 60% 50% / 0.3))
          `}
          key={item.id}
          transition="all 0.2s"
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
