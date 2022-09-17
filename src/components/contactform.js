import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

const color1 = '#dcd7d2'
const color2 = '#585555'

export default function ContactForm() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '70%' },
      }}
      noValidate
      autoComplete="off"
    >
        <div>
            <TextField
            required
            id="outlined-required"
            label="Name"
            />
            <TextField
            id="outlined-required"
            label="Email"
            />
            <TextField
            required
            id="outlined-required"
            label="Mobile"
            />
            <TextField
            required
            id="outlined-textarea"
            label="Message"
            placeholder="Placeholder"
            multiline
            />
            <Button
                variant="contained"
                sx={{ mt:5, ml:1, backgroundColor: color1, color: color2, display: 'block', zIndex: '-1' }}
            >
                Submit
            </Button>
        </div>
    </Box>
  );
}
