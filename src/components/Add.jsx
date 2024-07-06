import { Box, Button, Container, TextField, Typography } from '@mui/material'
import React from 'react'

export const Add = () => {
  return (
    <Container maxWidth="sm"sx={{ 
      bgcolor: 'background.paper', 
      p: 2, 
      mt: 5, 
      borderRadius: 1, 
      boxShadow: 3 
    }}>
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 2, width: '100%' },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
    noValidate
    autoComplete="off"
  >
     <Typography variant="h5" component="h2" sx={{ mb: 3 }}>
          Add Product
        </Typography>
    <div>
      <TextField
        required
        id="outlined-required"
        label="Name"
        variant="standard"
      />
      </div>
      <div>
      <TextField
       
        id="outlined-disabled"
        label="Price"
        variant="standard"
        
      />
      </div>
      <div>
      <TextField
        id="outlined-password-input"
        label="Category"
        variant="standard"
        
        
      />
      </div>
      <div>
      <TextField
        id="outlined-required"
        label="Description"
        variant="standard"
       
       
      />
      
      </div>
      <Button variant='contained'sx={{ mt: 2 }}>Submit</Button>
      <br></br>
      </Box>
      </Container>
  )
}
