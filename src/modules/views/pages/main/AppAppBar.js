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
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import PetsIcon from '@mui/icons-material/Pets';
import { authService } from '../../../../fbase';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


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

  // 로그아웃
  const navigate = useNavigate()
  const onLogOutClick = async () => {
    await authService.signOut()
    navigate('/')
    window.location.reload()
  }

  //링크 스타일
  const pcLinkStyle = {
    color:'#fff',
    textDecoration:'none'
  }

  const mobileLinkStyle = {
    textDecoration:'none',
    color:'black',
  }


  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          {/*  로고 */}  
          <PetsIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, fontWeight:30 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link style={pcLinkStyle} to='/'>WithDog</Link>
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
              <Typography
                  variant="subtitle1"
                  underline="none"
                >
                  <Link onClick={handleCloseNavMenu} style={mobileLinkStyle} to='/blog'>Doggitter</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
              <Typography
                  color="inherit"
                  variant="subtitle1"
                  underline="none"
                >
                  <Link onClick={handleCloseNavMenu} style={mobileLinkStyle} to='/test'>Dog MBTI</Link>
                </Typography>
              </MenuItem>
              <MenuItem>
              <Typography
                  color="inherit"
                  variant="subtitle1"
                  underline="none"
                >
                  <Link onClick={handleCloseNavMenu} style={mobileLinkStyle} to='/info'>INFO</Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          {/* PC 영역 로고 */}
          <PetsIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link style={pcLinkStyle} to='/'>WithDog</Link>
          </Typography>

          {/* PC 메뉴 */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Typography
                  color="white"
                  variant="h6"
                  underline="none"
                  sx={{ mr:3, my: 3, color: 'white', display: 'block', fontSize:15 }}                
                  >
                  <Link style={pcLinkStyle} to='/blog'>Doggitter</Link>
              </Typography>
              <Typography
                  variant="h6"
                  underline="none"
                  sx={{ mr:3, my: 3, color: 'white', display: 'block', fontSize:15 }}                      
                  >
                  <Link style={pcLinkStyle} to='/test'>Dog MBTI</Link>
              </Typography>
                <Typography
                  variant="h6"
                  underline="none"
                  sx={{ mr:3, my: 3, color: 'white', display: 'block', fontSize:15 }}                    
                  >
                <Link style={pcLinkStyle} to='/info'>INFO</Link>
                </Typography>
          </Box>

          {/* 세팅 영역 */}
          { userObj ? (
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* 아바타 */}
                <Avatar sx={{ bgcolor: 'secondary.dark', fontSize:15 }}>
                  {userObj.displayName}
                </Avatar>
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
              <Typography
                variant="subtitle1"
                underline="none"
              >
                <Link onClick={handleCloseUserMenu} style={mobileLinkStyle} to='/mypage'>My Profile</Link>
              </Typography>
              </MenuItem>
              <MenuItem>
              <Typography
                variant="h7"
                underline="none"
                color="inherit"
                onClick={onLogOutClick}
              >
                로그아웃
              </Typography>
              </MenuItem>
            </Menu>
          </Box>
          ) : (
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
              <Typography
                variant="subtitle1"
                underline="none"
                color="inherit"
              >
                <Link to='/login' onClick={handleCloseUserMenu} style={mobileLinkStyle}>로그인</Link>
              </Typography>
              </MenuItem>
              <MenuItem>
              <Typography
                variant="subtitle1"
                underline="none"
              >
                <Link to='/signup' onClick={handleCloseUserMenu} style={mobileLinkStyle}>회원가입</Link>
              </Typography>
              </MenuItem>
            </Menu>
          </Box>
          )
        }
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default AppAppBar;
