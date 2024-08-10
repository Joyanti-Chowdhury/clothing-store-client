import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Card, CardContent, Container, Typography } from "@mui/material";
import Image from "next/image";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GradeIcon from "@mui/icons-material/Grade";
import ReplayIcon from "@mui/icons-material/Replay";
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';
const Return = () => {
  return (
    <Container  sx={{ margin: "50px auto ",
      
     }}>
      <Grid
        container
       
        spacing={2}
        sx={{
          margin:"20px",
          gap:5,
          color: "white",
          paddingLeft: "5px",
          borderRadius: "10px",
     
       
        }}
      >

      <Card 
      sx={{ height: "75%",
       
     
       

       }}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <Box
                  sx={{
                    display: "flex",
                   
                  
                  }}
                >
                <Box sx={{ 
                             padding: '10px',
               
                 }}>
                <ReplayIcon sx={{    fontSeize:"200px", 

                  color:"gray"
                }}
                ></ReplayIcon>
                </Box>
                  <Box>
                    <Typography gutterBottom variant="h6">
                      RETURN & EXCHANG
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Committed to return the money in 30 days
                    </Typography>
                  </Box>

                  
                </Box>
              </Typography>
            </CardContent>
          </Card>
      <Card sx={{ height: "75%" , }}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <Box
                  sx={{
                    display: "flex",
                  
                    
                  }}
                >
                <Box sx={{ 
                  
               
                 }}>
                <CardGiftcardIcon sx={{    Seize:"200px", 
              margin:"10px",
                  color:"gray"
                }}
                ></CardGiftcardIcon>
                </Box>
                  <Box>
                    <Typography gutterBottom variant="h6">
                    RECEIVE GIFT CARD
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Receive gift of orders over the amount $50
                    </Typography>
                  </Box>

               
                </Box>
              </Typography>
            </CardContent>
          </Card>
      <Card sx={{ height: "75%" }}>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <Box
                  sx={{
                    display: "flex",
                    

                  }}
                >
                <Box sx={{ 
               
               
                 }}>
                <WifiCalling3Icon sx={{    fontSeize:"200px", 
                margin:"10px",
                  color:"gray"
                }}
                ></WifiCalling3Icon>
                </Box>
                  <Box>
                    <Typography gutterBottom variant="h6">
                  
                    ONLINE SUPPORT 24/7
                
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                
                    Receive24/7 online support is always ready
                    </Typography>
                  </Box>

                </Box>
              </Typography>
            </CardContent>
          </Card>











      </Grid>
     
    
    </Container>
  );
};

export default Return;
