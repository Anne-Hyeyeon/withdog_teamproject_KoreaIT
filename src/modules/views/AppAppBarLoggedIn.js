import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import PetsIcon from '@mui/icons-material/Pets';
import { authService } from '../../fbase';
import { useNavigate } from 'react-router-dom';


const rightLink = {
  fontStyle: 'Italic',
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

const commonLink = {
  fontSize: 14,
  color: 'common.white',
  ml: 6,
};

function AppAppBarLoggedIn() {
  const navigate = useNavigate()
  const onLogOutClick = () => {
    authService.signOut()
    navigate('/')
  }
  return (
    <div>
          <AppBar position="fixed">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
            {/* 아이콘, 홈 버튼 */}
              <PetsIcon 
                fontSize= 'large' 
                sx={{ mr : 1 }}/>
              <Link
                variant="h6"
                underline="none"
                color="inherit"
                sx={{ fontSize: 24 }}
                href="/"
              >
                {'WithDog' }
              </Link>



            {/* 메인 메뉴 */}
              <Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                <Link
                  color="inherit"
                  variant="h6"
                  underline="none"
                  href="/blog"
                  sx={commonLink}
                >
                  {'Doggitter'}
                </Link>
                <Link
                  variant="h6"
                  underline="none"
                  href="/test"
                  sx={commonLink}
                >
                  {'DOG MBTI'}
                </Link>
                <Link
                  variant="h6"
                  underline="none"
                  href="/info"
                  sx={commonLink}
                >
                  {'INFO'}
                </Link>
              </Box>


            {/* 로그인 */}
              <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                <Link
                  onClick={onLogOutClick}
                  color="inherit"
                  variant="h6"
                  underline="none"
                  href="/"
                  sx={rightLink}
                >
                  {'Log Out'}
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
          <Toolbar />
    </div>
  );
}


export default AppAppBarLoggedIn;