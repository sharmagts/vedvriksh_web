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
//import Link from '@mui/material/Link'

const color1 = '#dcd7d2'
const color2 = '#585555'

export const Contact = () => {

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
                          Contact <span style={{color: color2}}>Us</span>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{mt:0}}>
                <Grid item xs={12} sm={8} md={8}>
                    <img src='home_img09.jpg' style={{width:'100%',height:'auto'}}/>
                </Grid>
                <Grid item xs={12} sm={4} md={4}>
                    <Box className='section-text' sx={{ width: '100%' }}>
                        <Typography className='fs-h2' variant='h2' component='h6'>
                            Have Queries? Contact Us
                        </Typography>
                    </Box>
                    <ContactForm />
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}