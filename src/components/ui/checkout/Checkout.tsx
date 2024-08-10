"use client";
import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Flow_Rounded } from 'next/font/google';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Checkout = () => {
  return (
    <Container>
      <Box>
        {/* <Grid  sx={{
          margin: "10px auto",
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
        }}>
          */}

        <Box sx={{ width: 1 }}>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Box gridColumn="span 8">
              <Item>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead
                      sx={{ backgroundColor: "rgba(20, 20, 20, 0.5)" }}
                    >
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Item>
            </Box>
            <Box gridColumn="span 4">
              <Item sx={{ backgroundColor: "rgba(20, 20, 20, 0.2)" }}>
                <Typography sx={{ textAlign: "center", margin: "10px" }}>
                  {" "}
                  By placing your order, you agree to our company Privacy policy
                  and Conditions of use.
                </Typography>

                <hr />
                <Typography
                  variant="h6"
                  component="p"
                  sx={{ textAlign: "left", margin: "10px" }}
                >
                  {" "}
                  Order summary{" "}
                </Typography>

                <Box>
                  <Box
                    sx={{
                      margin: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{ textAlign: "left", margin: "10px" }}
                    >
                      Items(3):{" "}
                    </Typography>

                    <Typography
                      variant="h6"
                      component="p"
                      sx={{ textAlign: "right", margin: "10px" }}
                    >
                      $ 100
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      margin: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{ textAlign: "left", margin: "10px" }}
                    >
                     Shipping and handling:{" "}
                    </Typography>

                    <Typography
                      variant="h6"
                      component="p"
                      sx={{ textAlign: "right", margin: "10px" }}
                    >
                      $ 100
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      margin: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{ textAlign: "left", margin: "10px" }}
                    >
                      Before Tax:{" "}
                    </Typography>

                    <Typography
                      variant="h6"
                      component="p"
                      sx={{ textAlign: "right", margin: "10px" }}
                    >
                      $ 100
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      margin: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{ textAlign: "left", margin: "10px" }}
                    >
                      Tax Collected:{" "}
                    </Typography>

                    <Typography
                      variant="h6"
                      component="p"
                      sx={{ textAlign: "right", margin: "10px" }}
                    >
                      $ 100
                    </Typography>
                  </Box>
               
                </Box>

                <hr/>
                  

                <Box
                    sx={{
                      margin: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      variant="h6"
                      component="p"
                      sx={{ textAlign: "left", margin: "10px" }}
                    >
                        Order Total:{" "}
                    </Typography>

                    <Typography
                      variant="h6"
                      component="p"
                      sx={{ textAlign: "right", margin: "10px" }}
                    >
                      $ 100
                    </Typography>
                  </Box>

                  <Button sx={{ margin: "10px",
                    Flow_Rounded: "left" }} variant="contained" fullWidth={true} 
                   >Proceed to Checkout</Button>
              </Item>
            </Box>
            <Box gridColumn="span 4">
              <Item sx={{ border: "1px solid gray" }}>
                <Typography variant="h6" sx={{ textAlign: "left", margin: "10px" }}>
                  {" "}
                      Shipping Address 
                </Typography>

                <Box sx={{ margin: "10px", }}>
                    
                <Box>
            
                <Grid container spacing={3} my={2}>
                  <Grid item md={12}>
                    <TextField
                          label="Name"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                     
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                
                      label="Email"
                      type="email"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                   
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      label="Password"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      label="Phone"
                      type="tel"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                     
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      label="Address"
                      type="text"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      
                    />
                  </Grid>
                </Grid>

                <Button
                  sx={{ margin: "10px  0px" }}
                  variant="contained"
                  fullWidth={true}
                  type="submit"
                >
                  Register
                </Button>
                <Typography
                  style={{
                    textAlign: "center",
                    fontWeight: "300",
                    fontVariant: "P",
                  }}
                >
                  Do you have an account? 
                </Typography>
             
            </Box>

                </Box>
              </Item>
            </Box>
            <Box gridColumn="span 8">
              <Item>xs=8</Item>
            </Box>
          </Box>
        </Box>

        {/* </Grid> */}

        <Grid></Grid>
      </Box>
    </Container>
  );
};

export default Checkout;
