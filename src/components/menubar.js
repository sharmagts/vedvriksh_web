import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import DehazeIcon from '@mui/icons-material/Dehaze'
import HomeIcon from '@mui/icons-material/Home'
import CorporateFareIcon from '@mui/icons-material/CorporateFare'
import CategoryIcon from '@mui/icons-material/Category'
import ContactsIcon from '@mui/icons-material/Contacts'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import Drawer from '@mui/material/Drawer'

const color1 = '#dcd7d2'
const color2 = '#585555'
const drawerWidth = 240

const menuData = [
    {
      label: "Home",
      href: "/vedvriksh_web/",
      icon: "HomeIcon"
    },
    {
      label: "About",
      href: "/about",
      icon: "CorporateFareIcon"
    },
    {
        label: "Product",
        href: "/product",
        icon: "CategoryIcon"
    },
    {
      label: "Contact",
      href: "/contact",
      icon: "ContactsIcon"
    }
  ];

export const Menubar = () => {
  const [bgColor, setBgColor] = useState('transparent');
  const [menuZIndex, setMenuZIndex] = useState(0);
  const [menuLinkClass, setMenuLinkClass] = useState('menulink font-ndot55');
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //const matches = useMediaQuery('(max-width:600px)');
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const changeNavbarColor = () =>{
     /* add black background only if scroll more than 100 and not mobile */
     if(window.scrollY >= 100 && !matches){
        setBgColor('black');
        setMenuZIndex(1);
        setMenuLinkClass('menulinkblack font-ndot55');
     }
     else{
      setBgColor('transparent');
      setMenuLinkClass('menulink font-ndot55');
     }
  }
  window.addEventListener('scroll', changeNavbarColor);

  const drawer = (
    <div>
      <List sx={{backgroundColor:'#d7d8d8'}}>
        {menuData.map((menu, index) => (
          <ListItem key={index} disablePadding sx={{pl:1,borderBottom:'#0a0a0b7d 1.6px dotted'}}>
            <ListItemIcon sx={{minWidth:'10px'}}>
                {
                    {
                        'HomeIcon': <HomeIcon sx={{mr:1}}/>,
                        'CorporateFareIcon': <CorporateFareIcon sx={{mr:1}}/>,
                        'CategoryIcon': <CategoryIcon sx={{mr:1}}/>,
                        'ContactsIcon': <ContactsIcon sx={{mr:1}}/>,
                    }[menu.icon]
                }
            </ListItemIcon>
            <ListItemText>
                <Link className="font-ndot55" to={menu.href} underline="hover" style={{color:'#0a0a0bbf'}}>{menu.label}</Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  )
  //const container = window !== undefined ? () => window().document.body : undefined;
  
  return (
    <Container 
      className='menubar'
      maxWidth="xl" 
      disableGutters={true}
      sx={{mt:0,padding:'15px',position:'fixed',backgroundColor:`${bgColor}`,zIndex:`${menuZIndex}`}}>
        { matches ? (
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    >
                    {drawer}
                </Drawer>
                <DehazeIcon onClick={handleDrawerToggle} sx={{mt:1}}/>
            </Box>
        ) : (
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    typography: 'body1',
                    '& > :not(style) + :not(style)': {
                    ml: 2,
                    },
                }}
            >
                {menuData.map((menu,index) => (
                    <Link className={menuLinkClass} key={index} to={menu.href} underline="hover">
                        {menu.label}
                    </Link>
                ))}
            </Box>
            )
        }
    </Container>
  )
}
