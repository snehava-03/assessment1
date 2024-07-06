import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
  

export const Homepage = () => {
  const[rows,setRows]=useState([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then((res)=>{
      console.log(res.data)
      setRows(res.data)
    })
  },[])

  return (
    <Grid container spacing={5} style={{ marginTop: '7%' }}>
    {rows.map((item)=>(
      <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
    <Card sx={{ minWidth: 275, marginTop: '7%' }} >
    <CardContent>
      <Typography variant="body1" sx={{ fontSize: 16, fontWeight: 'bold' }}>
        Product name: {item.title}
      </Typography>
      <Typography variant="body1" sx={{ fontSize: 16}}>
       Price: {item.price}
     </Typography>
      <Typography variant="body1" sx={{ fontSize: 16 }}>
       Category: {item.category}
      </Typography>
      <Typography  variant="body1" sx={{ fontSize: 16 }}>
      <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: 'auto', maxHeight: '200px', objectFit: 'contain' }}
              />
      
        <br />
        
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  </Grid>
  ))}
  </Grid>
);
}
  

