import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Box, AppBar, IconButton, Typography} from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Navbar } from './Navbar';





export const Home = ()=>{

    const [data, setData] = useState()
    

    useEffect(()=>{
        axios.get('https://dummyjson.com/products').then((res)=>{
          console.log(res.data.products)
          setData(res.data.products)
          
        }).catch((err)=>{
          console.log(err)
        })
        
    
      }, [])


     

      

    
    
      
     

  
      






    return(
        <Box sx={{display:'flex'}}>
          <AppBar  sx={{bgcolor:"blue", height:"80px", position:"fixed", mb:"50px"}}>
            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", padding:"20px 40px"}}>
              <Box>
                <Typography variant='h4'>MernStack</Typography>
              </Box>
              <IconButton>
                <ShoppingCartIcon  fontSize='large' sx={{color:"white"}}/>
              </IconButton>
            </Box>
          </AppBar>

         
          <Navbar/>

          




        </Box>
    )
}

