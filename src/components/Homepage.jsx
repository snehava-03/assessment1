import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material';
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
    (rows.map((item)=>(
    <Card sx={{ minWidth: 275, marginTop: '7%' }} key={item.id}>
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
      Image: {item.image}
      
        <br />
        
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  )))
);
}
  

