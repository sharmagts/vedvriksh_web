import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from '@mui/material'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Button from '@mui/material/Button'
import AdbIcon from '@mui/icons-material/Adb'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
 
const headersData = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Contact",
      href: "/contact",
    }
  ];
const color1 = '#dcd7d2'
const color2 = '#585555'

export const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  return (
    <AppBar style={{backgroundColor : color1, color : color2 }}>
        <Container maxWidth="xl">
            <Toolbar>
                <AdbIcon sx={{ display: { xs: 'flex', md: 'flex' }, mr: 1 }} />
                <Typography 
                    variant="h6" 
                    component="a" 
                    href="/"
                    sx={{
                        color: 'inherit',
                        textDecoration: 'none'
                    }}
                >
                    Vedvriksh
                </Typography>
                <Box sx={{ flexGrow: 1, justifyContent: 'end', display: { xs: 'flex', md: 'none' } }}>
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
                    {headersData.map((page) => (
                      <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                        <Typography textAlign="center">{page.label}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
                <Box sx={{ flexGrow: 1, justifyContent: 'flex-end', display: { xs: 'none', md: 'flex' } }}>
                    {headersData.map((page) => (
                    <Link key={page.label} to={page.href} style={{textDecoration:'none',color:'inherit',margin:'10px'}}>
                        {page.label}
                    </Link>
                    ))}
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
  )
}
