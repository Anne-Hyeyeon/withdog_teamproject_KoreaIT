import * as React from 'react';
import UserPosts from './UserPosts';

import {Box, Switch, Paper, Collapse, FormControlLabel} from '@mui/material';


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
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label={userObj.displayName}
      >
        {userObj.displayName}님의
      </FormControlLabel>
      <Box>
        <div>
          <Collapse in={checked}>
            {icon}
            <UserPosts userObj={userObj}/>
          </Collapse>
        </div>
      </Box>
    </Box>
  );
}
