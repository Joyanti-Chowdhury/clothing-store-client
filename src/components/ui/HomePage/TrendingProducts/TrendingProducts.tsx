import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { Button, CardActionArea, CardActions } from "@mui/material";
import Image from "next/image";
import GradeIcon from "@mui/icons-material/Grade";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const TrendingProducts = async () => {
  const res = await fetch("https://clothing-store-server-blond.vercel.app/products", {
    next: {
      revalidate: 30,
    },
  });

  const products = await res.json();
  console.log(products);

  return (
    <Container>
      <Box
        sx={{
          my: 5,
          py: 30,
          backgroundColor: "rgba(20, 20, 20, 0.1)",
          clipPath: "polygon(0 1%, 100% 20%, 100% 100%, 0 90%)",
        }}
      >
        <Box sx={{ textAlign: "center", mt: 10 }}>
          <Typography
            variant="h3"
            component="h1"
            fontWeight={600}
            color={"#1586FD"}
            gutterBottom
          >
            Trending Products
          </Typography>

          <Typography variant="h6" component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            expedita magni minima praesentium, similique voluptas!
          </Typography>
        </Box>

        <Container sx={{ margin: "30px auto" }}>
          <Grid container spacing={2}>
            {products?.slice(0, 6).map((product: any) => (
              <Grid key={product.id} item xs={12} sm={6} md={3} lg={3}>
                <Card sx={{ height: "100%" }}>
                  <Box>
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={500}
                      height={80}
                    />
                  </Box>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {/* {product.description} */}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                     <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                     <Box sx={{ justifyContent: "space-between" }}>
                        <AttachMoneyIcon /> {product.price}
                        
                      </Box>
                      <Box sx={{ justifyContent: "space-between" }}>  <GradeIcon /> {product.rating}</Box>
                     </Box>
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      justifyContent: "space-between",

                      paddingBottom: "20px",
                    }}
                  >
                    <Button size="small">Share</Button>
                    <Button size="small">See More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center" , mt:4}}>
      
      <Button variant='outlined' color='primary' sx={{mt:'10px',
         
       
     }}>View All</Button>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default TrendingProducts;
