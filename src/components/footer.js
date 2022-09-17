import React from 'react'
import { Typography, Grid } from '@mui/material'
import Box from '@mui/material/Box'
import AdbIcon from '@mui/icons-material/Adb'
import Facebook from '@mui/icons-material/Facebook'
import Twitter from '@mui/icons-material/Twitter'
import YouTube from '@mui/icons-material/YouTube'

export const Footer = () => {
  return (
    <footer style={{backgroundColor: "#dcd7d2", width: "100%", marginTop: "30px"}}>
        <Box sx={{color: "#000000", padding: "10px"}}>
            <Grid container spacing={2} sx={{mt:2,pt:0}}>
                <Grid className="footer-item" item xs sm md>
                    <AdbIcon sx={{ mr: 1 }} />
                    <Typography 
                        className='fs-h2'
                        variant="h6" 
                        component="a" 
                        href="/"
                        sx={{
                            color: 'inherit',
                            textDecoration: 'none',
                            verticalAlign:'super'
                        }}
                    >
                        Vedvriksh
                    </Typography>
                </Grid>
                <Grid className='fs-h2 footer-item' item xs={12} sm={4} md={4} sx={{flexGrow: 1, justifyContent: 'center', display: { md: 'flex' }}}>
                    © 2022 Vedvrish. All Rights Reserved.
                </Grid>
                <Grid className='footer-item' item xs sm md sx={{flexGrow: 1, justifyContent: 'flex-end', display: { md: 'flex' }}}>
                    <Facebook sx={{ mr: 1 }} />
                    <Twitter sx={{ mr: 1 }} />
                    <YouTube sx={{ mr: 1 }} />
                </Grid>
            </Grid>
        </Box>
    </footer>
  )
}
