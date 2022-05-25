import * as React from 'react';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =
  'https://cdn.pixabay.com/photo/2019/08/07/14/11/dog-4390885_1280.jpg';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />

      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mr:-50, mb: -50, mt: { sx: 4, sm: 10 } }}
      >
        오늘은 무엇을 하고 놀까?
      </Typography>
    </ProductHeroLayout>
  );
}
