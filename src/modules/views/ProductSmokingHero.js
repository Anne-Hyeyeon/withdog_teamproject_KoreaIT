import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';


function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt:15 }}
    >
      <Button
        sx={{
          border: '4px solid currentColor',
          borderRadius: 0,
          height: 'auto',
          py: 2,
          px: 5,
        }}
      >
        <Typography variant="h4" component="span">
          Got any questions? Need help?
        </Typography>
      </Button>
      <Typography variant="subtitle1" sx={{ my: 3 }}>
        윗독 컨텐츠 이용에 어려움을 겪으시나요?
      </Typography>
      <Typography variant="subtitle1" sx={{ }}>
        홍보하고 싶은 상품이나 반려견 이벤트가 있나요?
      </Typography>
      <Box
        component="img"
        src="/static/themes/onepirate/producBuoy.svg"
        alt="buoy"
        sx={{ width: 60 }}
      />
      
    </Container>
  );
}

export default ProductSmokingHero;
