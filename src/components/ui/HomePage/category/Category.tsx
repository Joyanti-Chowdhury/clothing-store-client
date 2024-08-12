import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";

import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import GradeIcon from "@mui/icons-material/Grade";
import Link from "next/link";

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const Category = async () => {
  const res = await fetch(
    "https://clothing-store-server-blond.vercel.app/kids",
    {
      next: {
        revalidate: 30,
      },
    }
  );

  const data = await res.json();
  // console.log(data)

  return (
    <Container>
      <Box
        sx={{
          my: 2,
          py: 2,
          // backgroundColor: "rgba(20, 20, 20, 0.1)",
          // clipPath: "polygon(0 1%, 100% 20%, 100% 100%, 0 90%)",
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
            kids Brands
          </Typography>

          <Typography variant="h6" component="p">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
            expedita magni minima praesentium, similique voluptas!
          </Typography>
        </Box>

        <Container sx={{ margin: "30px auto" }}>
          <Grid container spacing={2}>
            {data?.slice(0, 7).map((product: any) => (
              <Grid key={product.id} item xs={12} sm={6} md={3} lg={3}>
                <Card sx={{ height: "100%" }}>
                  <Box
                    sx={{
                      "& img": {
                        width: "300px",
                        height: "200px",
                      },
                    }}
                  >
                    <Image
                      className="mt-5"
                      src={product.image}
                      alt={product.title}
                      width={500}
                      height={100}
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
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mt: 3,
                        }}
                      >
                        <Box sx={{ justifyContent: "space-between" }}>
                          <AttachMoneyIcon /> {product.price}
                        </Box>
                        <Box sx={{ justifyContent: "space-between" }}>
                          {" "}
                          <GradeIcon /> {product.rating}
                        </Box>
                      </Box>
                    </Typography>
                  </CardContent>
                  <CardActions
                    sx={{
                      justifyContent: "space-between",

                      paddingBottom: "20px",
                    }}
                  >
                    {/* <Button size="small">Share</Button>
                      <Button size="small">See More</Button>
                      <Link href={`/kids/${product.id}`}>
              <Button size="small" >
                Details
              </Button>
            </Link> */}

                    <Link href={`/kids?category=${product.category}`}>
                      <Button
                        sx={{
                          mt: 2,
                          ml: 5,
                          mr: 5,
                        }}
                      >
                        Check Out
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", mt: 4 }}>
           <Link href="/categories">
           <Button variant="outlined" color="primary" sx={{ mt: "10px" }}>
              View All
            </Button>
           </Link>
          </Box>
        </Container>
      </Box>
    </Container>

    //         <Container>
    //             <Box sx={{ textAlign: "center" , mt:10}}>
    //             <Typography variant="h3" component="h1" fontWeight={600} color={"#1586FD"  } gutterBottom >
    //                     Our Flash Sale
    //                 </Typography>

    //                 <Typography variant="h6" component="p">
    //                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque expedita magni minima praesentium, similique voluptas!
    //                 </Typography>
    //             </Box>

    //   <Stack direction="row" gap={4} mt={5}>

    //     {
    //         data?.slice(0, 6).map((item : any) => (
    //             <Box key={item.id} sx={{ flex: 1,
    //               width:"150px",
    //               height:"250px",
    //               backgroundColor:"rgb(245,245,245 , 1)",
    //               border: "1px solid rgba(250,250,250, 1)",
    //               // border:" 1px solid gray",
    //               borderRadius:"5px",
    //               textAlign:"center",
    //               padding:" 20px 10px",

    //               "& img" : {
    //                 width:"100px",
    //                 height:"100px",
    //                 margin:"0 auto"
    //               },

    //               "&:hover" : {
    //                 border: "1px solid gray",
    //                 padding:" 20px 10px",
    //                 borderRadius:"5px",
    //               }

    //             }}
    //             >
    //                 <Image src={item.image} alt={item.title} width={100} height={100} />
    //                 <Typography component="p" fontWeight={600} color={"#1586FD"}  mt={2} >
    //                     {item.title}
    //                 </Typography>
    //               </Box>
    //         ))

    //     }
    //   </Stack>
    //      <Box sx={{ textAlign: "center" , mt:4}}>

    //  <Button variant='outlined' color='primary' sx={{mt:'10px',

    // }}>View All</Button>
    //      </Box>

    //         </Container>
  );
};

export default Category;
