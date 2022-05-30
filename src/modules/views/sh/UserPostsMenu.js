import * as React from 'react';
import UserPosts from './UserPosts';

import {Box, Switch, Paper, Collapse, FormControlLabel, AccordionSummary, Typography, Accordion, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box >
      <Box/>
    </Box>
  </Paper>
);

export default function UserPostsMenu({ userObj }) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Box>
      <Accordion className="accordion">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="subtitle2">{userObj.displayName}</Typography>
          <Typography>님의 게시물</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <UserPosts userObj={userObj}/>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
