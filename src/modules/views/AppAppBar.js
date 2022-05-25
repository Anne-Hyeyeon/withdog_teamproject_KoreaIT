import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from '@mui/material';


const AppAppBar = ({ userObj }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
        {/* 모바일 영역 로고 */}
          <PetsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontWeight:30 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            WithDog
          </Typography>

          {/* 모바일 영역 */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* 모바일 메뉴 */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem>
              <Link
                  color="inherit"
                  variant="h6"
                  underline="none"
                  href="/blog"
                >
                  {'Doggitter'}
                </Link>
              </MenuItem>
              <MenuItem>
              <Link
                  variant="h6"
                  underline="none"
                  href="/test"
                >
                  {'DOG MBTI'}
                </Link>
              </MenuItem>
              <MenuItem>
              <Link
                  variant="h6"
                  underline="none"
                  href="/info"                
                >
                  {'INFO'}
                </Link>
              </MenuItem>
            </Menu>
          </Box>

          {/* PC 영역 */}
          <PetsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            WithDog
          </Typography>

          {/* PC 메뉴 */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link
                  color="inherit"
                  variant="h6"
                  underline="none"
                  href="/blog"
                  sx={{ mr:3, my: 3, color: 'white', display: 'block', fontSize:15 }}                
                  >
                  {'Doggitter'}
              </Link>
              <Link
                  variant="h6"
                  underline="none"
                  href="/test"
                  sx={{ mr:3, my: 3, color: 'white', display: 'block', fontSize:15 }}                      
                  >
                  {'DOG MBTI'}
                </Link>
                <Link
                  variant="h6"
                  underline="none"
                  href="/info"
                  sx={{ mr:3, my: 3, color: 'white', display: 'block', fontSize:15 }}                    
                  >
                  {'INFO'}
                </Link>
          </Box>

          {/* 세팅 영역 */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Doggie" src="https://placedog.net/200/200?random" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
              <Link
                variant="h7"
                underline="none"
                color="inherit"
                href="/login"
              >
                {'로그인' }
              </Link>
              </MenuItem>
              <MenuItem>
              <Link
                variant="h7"
                underline="none"
                color="inherit"
                href="/signup"
              >
                {'회원가입' }
              </Link>
              </MenuItem>
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppAppBar;
