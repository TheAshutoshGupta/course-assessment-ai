
import React from 'react'
import BoxWrapper from '../../shared/BoxWrapper'
import { Box, Button, Typography,Paper  } from '@mui/material'
 
const Recommendation = () => {
  const webDevelopmentContext = [
    'Frontend frameworks and libraries',
    'Responsive design and cross-browser',
    'Frontend Animations',
    'Continuous integration and deployment',
  ];
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  return (
    <Box>
    <BoxWrapper title="Recommendation">
        <Box>
        <Typography sx={{marginTop:'1rem', marginBottom:'1rem' ,fontWeight:'600', fontSize:'1.4rem', textAlign:'center'}}>
        According to the Assessment <br/>You should go for {webDevelopmentContext[randomNumber]}  course
        </Typography>
        </Box> 
        <Box>

      <Typography sx={{marginTop:'1rem', marginBottom:'1rem' ,fontWeight:'400', fontSize:'1.4rem', textAlign:'center'}}>
        {webDevelopmentContext[randomNumber]} 
        </Typography>

    
      <Typography sx={{marginTop:'1rem', marginBottom:'1rem' ,fontWeight:'400', fontSize:'1.4rem', textAlign:'center'}}>
        Basics Of javascript framework
        </Typography>


      <Typography sx={{marginTop:'1rem', marginBottom:'1rem' ,fontWeight:'400', fontSize:'1.4rem', textAlign:'center'}}>
        Css Preprocessors
        </Typography>


      <Typography sx={{marginTop:'1rem', marginBottom:'1rem' ,fontWeight:'400', fontSize:'1.4rem', textAlign:'center'}}>
        Animations
        </Typography>

        </Box>
        
    </BoxWrapper>
    
          </Box>
          
  )
}

export default Recommendation;