"use client"
import {
  Box,
  Button,
  CardActions,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import GradeIcon from "@mui/icons-material/Grade";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { fontGrid } from "@mui/material/styles/cssUtils";
import Link from "next/link";

const Products = ({ products }: { products: any }) => {
  return (
    <Container>
      <Box
        sx={{
          my: 5,
        }}>
        <Box sx={{ textAlign: "left", mt: 10 }}>
          <Typography
            variant="h3"
            component="h1"
            fontWeight={600}
            color={"#1586FD"}
            gutterBottom>
            All Products
          </Typography>

          <Box sx={{ textAlign: "left" }}>
            <Typography sx={{ fontSize: "14px", color: "#1586FD" }}>
              Show 1-12 items of 30
            </Typography>
          </Box>
          <Typography variant="h6" component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            expedita magni minima praesentium, similique voluptas!
          </Typography>
        </Box>

        <Container
          sx={{
            margin: "50px auto",
            backgroundColor: "rgba(20, 20, 20, 0.1)",
          }}>
          <Grid container spacing={2} sx={{ padding: "5px" }}>
            {products?.map((product: any) => (
              <Grid item xs={12} sm={6} md={3} lg={3} key={product._id}>
                <Link href={`/product/${product._id}`}>
                  <Card sx={{ height: "550px" }}>
                    <Box sx={{ position: "relative" }}>
                      <Image
                        src={product.image}
                        alt={product.title}
                        width={400}
                        height={50}
                      />

                      <Box>
                        <Button
                          sx={{
                            position: "absolute",
                            top: "0",
                            right: "0",
                            bgcolor: "black",
                            color: "white",
                            opacity: "0.8",
                            borderRadius: "0px 0px 0px 10px",
                            padding: "2px 5px",
                          }}>
                          {" "}
                          -13%
                        </Button>
                      </Box>
                    </Box>
                    <hr></hr>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {/* {product.description} */}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}>
                          <Box sx={{ justifyContent: "" }}>
                            <AttachMoneyIcon /> {product.price}
                          </Box>
                          <Box sx={{ justifyContent: "space-between" }}>
                            {" "}
                            <ControlPointIcon></ControlPointIcon>
                          </Box>
                        </Box>
                        <Box sx={{ mt: 3, p: 5, mb: 5 }}>
                          <Button>Details</Button>
                        </Box>
                      </Typography>
                    </CardContent>
                    <CardActions
                      sx={{
                        justifyContent: "space-between",

                        paddingBottom: "20px",
                      }}></CardActions>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Box sx={{ textAlign: "center", m: 4 }}>
          <Typography>Show 1-12 items of 30</Typography>
        </Box>
        <hr></hr>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button variant="contained" color="primary" sx={{ mt: "10px" }}>
            Load More
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Products;
