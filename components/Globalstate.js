import  React,{useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  
}));

export default function Globalstate() {
    const [GlobalData,setGlobalData]= useState({});

useEffect(()=>{
async function getData(){
const response =await fetch ("https://api.covidtracking.com/v1/states/current.json")
let data= await response.json();
setGlobalData(data[1]);
console.log(data[1]);
}  
getData();
},[]) 
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} style={{ maxWidth:1000,
  margin:'0 auto', marginTop: 50  }}>
      {Object.keys(GlobalData).map((key,ind)=> {
          return (
        <Grid item xs={12} sm={4} key={ind}>
          <Item><h3>{key.toUpperCase()}</h3>
          <h3>{GlobalData[key]}</h3></Item>
    
        </Grid>
          )
      })}
        
      
      
      </Grid>
    </Box>
  );
}
