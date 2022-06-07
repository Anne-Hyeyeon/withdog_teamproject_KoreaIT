import React, { useState } from 'react';
import { Box } from '@mui/material';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const ScrollButton = () => {

  const ScrollBtnStyle = {
    margin: 0,
    top: 'auto',
    right: '5%',
    bottom: '15%',
    left: 'auto',
    position: 'fixed',
    transform: 'rotateX(180deg)'
  };

  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <Box style={ScrollBtnStyle}>
      <ExpandCircleDownIcon fontSize="large" onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }} />
    </Box>
  );
}

export default ScrollButton;