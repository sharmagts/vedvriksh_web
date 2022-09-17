import React, { useEffect } from 'react'
import { MediaCard } from './mediacard'
import ContactForm from './contactform'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

const color1 = '#dcd7d2'
const color2 = '#585555'

export const Home = () => {

  useEffect(() => {
    AOS.init({duration: 2000})
  },[])

  return (
    <div>
        <Container maxWidth="xl" disableGutters={true} sx={{mt:0}}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={8} md={8}>
                    <img src='home_img07.jpg' style={{width:'100%',height:'auto',position:'relative',zIndex:'-1'}}/>
                    <Typography className='fs-h2 company-text' variant='h2' component='div' sx={{position:'absolute'}}>
                        Vedvriksh
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box className='header-text' sx={{ width: '100%', maxWidth: 500 }}>
                        <Typography className='fs-h2' variant='h2' component='div'>
                            Pure Instinct.
                        </Typography>
                        <Typography className='fs-h2' variant="h5" component='p' gutterBottom sx={{mt:'20px',fontSize:'.9375rem',lineHeight:1.34,letterSpacing:'2.8px'}}>
                        Designed with instinct, to bring joy back to the everyday. Through the Glyph Interface, a perfected OS and exceptional dual camera. All startlingly fast.
                        </Typography>
                        <Typography className='fs-h2' variant="h5" component='p' gutterBottom sx={{mt:'20px',fontSize:'.9375rem',lineHeight:1.34,letterSpacing:'2.8px'}}>
                            <Link href='about' underline="hover" sx={{color:'#0a0a0bbf'}}>(Know More)</Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={1} sx={{mt:0,padding:'30px'}}>
                <Grid item xs={12} sm={4} md={4}>
                    <Box sx={{ width: '100%', maxWidth: 500, textAlign: 'center' }}>
                        <Typography className='fs-h2' variant='h2' component='div'>
                            Service 1
                        </Typography>
                        <Typography className='fs-h2' variant="h5" component='p' gutterBottom sx={{mt:'20px',fontSize:'.9375rem',lineHeight:1.34,letterSpacing:'2.8px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box sx={{ width: '100%', maxWidth: 500, textAlign: 'center' }}>
                        <Typography className='fs-h2' variant='h2' component='div'>
                            Service 2
                        </Typography>
                        <Typography className='fs-h2' variant="h5" component='p' gutterBottom sx={{mt:'20px',fontSize:'.9375rem',lineHeight:1.34,letterSpacing:'2.8px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box sx={{ width: '100%', maxWidth: 500, textAlign: 'center' }}>
                        <Typography className='fs-h2' variant='h2' component='div'>
                            Service 3
                        </Typography>
                        <Typography className='fs-h2' variant="h5" component='p' gutterBottom sx={{mt:'20px',fontSize:'.9375rem',lineHeight:1.34,letterSpacing:'2.8px'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={1} sx={{mt:0}}>
                <Grid item xs={12} sm={8} md={8}>
                    <img src='home_img04.jpg' style={{width:'100%',height:'auto'}}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box className='section-text' sx={{ width: '100%', maxWidth: 500 }}>
                        <Typography className='fs-h2' variant='h2' component='div'>
                            About <span style={{color: color2}}>Us</span>
                        </Typography>
                        <Typography className='fs-h2' variant="h5" component='p' gutterBottom sx={{mt:'20px',fontSize:'.9375rem',lineHeight:1.34,letterSpacing:'2.8px'}}>
                            It’s easy to make something. Even easier when it’s just like the thing before it. And the one before that. But like all good things, this one starts from scratch. No notes. No blueprints. No map to find our way back.
                        </Typography>
                        <Typography className='fs-h2' variant="h5" component='p' gutterBottom sx={{mt:'20px',fontSize:'.9375rem',lineHeight:1.34,letterSpacing:'2.8px'}}>
                            <Link href='about' underline="hover" sx={{color:'#0a0a0bbf'}}>(More About Us)</Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={1} sx={{mt:0}}>
                <Grid item xs={12} sm={8} md={8} sx={{pt:0}}>
                    <img src='home_img05.jpg' style={{width:'100%',height:'auto'}}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box className='section-text' sx={{ width: '100%', maxWidth: 500 }}>
                        <Typography className='fs-h2' variant='h2' component='div'>
                            Products
                        </Typography>
                        <Typography className='fs-h2' variant="h5" component='p' gutterBottom sx={{mt:'20px',fontSize:'.9375rem',lineHeight:1.34,letterSpacing:'2.8px'}}>
                        The wait is so nearly over. 16 July. The first chance to get your hands on Phone (1). Here’s everything you need to know.
                        </Typography>
                        <Typography className='fs-h2' variant="h5" component='p' gutterBottom sx={{mt:'20px',fontSize:'.9375rem',lineHeight:1.34,letterSpacing:'2.8px'}}>
                            <Link href='product' underline="hover" sx={{color:'#0a0a0bbf'}}>(More)</Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={1} sx={{mt:0}}>
                <Grid item xs={12} sm={8} md={8}>
                    <img src='home_img09.jpg' style={{width:'100%',height:'auto'}}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box className='section-text' sx={{ width: '100%' }}>
                        <Typography className='fs-h2' variant='h2' component='h6'>
                            <span style={{color: color2}}>Contact Us</span>
                        </Typography>
                        <Typography className='fs-h2' variant="h5" component='p' gutterBottom sx={{mt:'20px',fontSize:'.9375rem',lineHeight:1.34,letterSpacing:'2.8px'}}>
                            Ground Floor, Verse Building, 18 Brunswick Place, London, N1 6DZ
                            108 E 16th Street, New York, NY 10003
                        </Typography>
                        <Typography className='fs-h2' variant="h5" component='p' gutterBottom sx={{mt:'20px',fontSize:'.9375rem',lineHeight:1.34,letterSpacing:'2.8px'}}>
                            hello@works-hub.com
                        </Typography>
                        <Typography className='fs-h2' variant="h5" component='p' gutterBottom sx={{mt:'20px',fontSize:'.9375rem',lineHeight:1.34,letterSpacing:'2.8px'}}>
                            +91 7099090990
                        </Typography>
                        <Typography className='fs-h2' variant="h5" component='p' gutterBottom sx={{mt:'20px',fontSize:'.9375rem',lineHeight:1.34,letterSpacing:'2.8px'}}>
                            <Link href='contact' underline="hover" sx={{color:'#0a0a0bbf'}}>(More)</Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}
