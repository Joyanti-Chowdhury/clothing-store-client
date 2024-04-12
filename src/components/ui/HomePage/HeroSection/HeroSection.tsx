"use client"
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import HeroImage from "../../../../assets/hero.jpg";
import { Flow_Rounded } from "next/font/google";
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import bannerImg1 from   '@/assets/banner.jpg';
import bannerImg2 from   '@/assets/banner2.jpg';
import bannerImg3 from   '@/assets/banner.jpg';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    // imgPath: '<bannerImg1/>',
    imgPath:'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1546213290-e1b492ab3eee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=2095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1580793241553-e9f1cce181af?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const HeroSection = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };





  return (
    <Container
      sx={{
        display: "flex",
        direction: "row",
        mt: 4,
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "700px",
         
          }}
        >
        
        
        </Box>

         <Box sx={{ p:1,
         mt:3
        
        }}>
         <Typography variant="h3" component="h1" fontWeight={600}>
          {" "}
          Welcome 
        </Typography>
        <Typography variant="h3" component="h1" fontWeight={600}>
          Come to Our store
        </Typography>
        <Typography
          variant="h3"
          component="h1"
          color="#1586FD"
          fontWeight={600}
        >
          For Every Occasion
        </Typography>
        <Typography
          variant="h6"
          component="p"
          sx={{
           mt:1
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          nemo, distinctio qui ut corporis facilis delectus 
          alias reiciendis nulla
        </Typography>
         </Box>

        <Box sx={{display: "flex" ,gap:2,
        mt:2
      }}>
          {" "}
          <Button variant="contained">Contact Us</Button>
          <Button
            variant="outlined"
            sx={{
              marginLeft: "16px",
            }}
          >
            {" "}
            Shop Now
          </Button>
        </Box>
      </Box>


{/* 
      <Box sx={{ p:1,
         flex: 1,
         display:"flex",
         justifyContent:"center",
         position:"relative" ,
         mt:0}}> 
         <Box sx={{ 
          position: "absolute",
          border: "rounded",

          m:2

          }}>
          <Image  className="rounded-s-full rounded-e-full  rotate-48" width={700} height={600} src={HeroImage} alt="grid"/>
         {/* <Image width={500} height={500} src={HeroImage} alt="grid"> </Image> */}
         {/* </Box>
         </Box> */} 





         <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 255,
                  display: 'block',
                  maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>







    </Container>
  );
};

export default HeroSection;
