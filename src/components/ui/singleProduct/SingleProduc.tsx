import {
  Box,
  Container,
  Divider,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import productImg1 from "@/assets/blazer1.jpg";
import productImg2 from "@/assets/blazer2.jpg";
import productImg3 from "@/assets/blazer3.jpg";
import productImg4 from "@/assets/blazer4.jpg";
import productImg5 from "@/assets/blazer5.jpg";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";

import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const SingleProduct = ({products} : any) => {
  
// console.log(products)

  
  
  return (
    <Container sx={{ mt: 5, backgroundColor: "rgba(20, 20, 20, 0.1)" }}>
      <Box
        sx={{
          margin: "10px auto",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        <Box
          sx={{
            margin: "20px auto",
            backgroundColor: "rgba(20, 20, 20, 0.1)",
            display: "grid ",
            gridTemplateColumns: "repeat(1, 1fr)",
            gridTemplateRows: "repeat(1, 1fr)",
          }}
        >
          <Box sx={{ m: 3 }}>
            <Image
              src={products.image}
              alt="productImg1"
              width={100}
              height={10}
            />
          </Box>

          <Box sx={{ margin: "0 auto", m: 2 }}>
            <Image
            src={products.image}
              alt="productImg1"
              width={100}
              height={10}
            />
          </Box>

          <Box sx={{ margin: "0 auto", m: 3 }}>
            <Image
             src={products.image}
              alt="productImg1"
              width={100}
              height={10}
            />
          </Box>
        </Box>

        <Box>
          <Container
            sx={{
              margin: "20px auto",
              display: "grid ",
              gridTemplateColumns: "repeat(1, 1fr)",
              gridTemplateRows: "repeat(1, 1fr)",
            }}
          >
            <Grid>
              <Image
              src={products.image}
                alt="productImg1"
                width={600}
                height={100}
              />
            </Grid>
          </Container>
        </Box>

        <Box sx={{ margin: "20px auto" }}>
          <Box sx={{ display: "flex" }}>
            <Typography
              variant="h5"
              font-size="5px"
              sx={{ margin: "10px auto" }}
            >
              {products.title}
            </Typography>
            <FavoriteBorderIcon sx={{ margin: "15px" }}></FavoriteBorderIcon>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "10px auto",
            }}
          >
            <Typography> ${products.price} | </Typography>
            <Rating name="half-rating" defaultValue={products.rating} precision={0.5} />

            <Typography>32reviews</Typography>
          </Box>

          <Divider></Divider>

          <Box sx={{ margin: 2 }}>
            <Typography>
              {products.description}
              {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores,
              vitae quis deserunt asperiores perferendis obcaecati odio cum?
              Quaerat rerum est repellat. Harum, voluptatum maiores odit ab
              animi assumenda laudantium quae! */}
            </Typography>
          </Box>

          <Box sx={{ Margin: 2 }}>
            <Box>
              <Box sx={{ display: "flex" }}>
                {" "}
                <FiberManualRecordIcon fontSize="small">
                  {" "}
                </FiberManualRecordIcon>
                <Typography>Lorem ipsum dolor sit amet.</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                {" "}
                <FiberManualRecordIcon fontSize="small">
                  {" "}
                </FiberManualRecordIcon>
                <Typography>Lorem ipsum dolor sit amet.</Typography>
              </Box>
              <Box sx={{ display: "flex" }}>
                {" "}
                <FiberManualRecordIcon fontSize="small">
                  {" "}
                </FiberManualRecordIcon>
                <Typography>Lorem ipsum dolor sit amet.</Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ mt: 2, display: "flex" }}>
            <AirportShuttleIcon></AirportShuttleIcon>
            <Typography>
              Free worldwide shipping on all orders over $100
            </Typography>
          </Box>
          <Box sx={{ mt: 2, display: "flex" }}>
            <PublishedWithChangesIcon></PublishedWithChangesIcon>
            <Typography>
              Delivers in: 3-7 Working Days Shipping & Return
            </Typography>
          </Box>
        </Box>
      </Box>

      <Container sx={{ margin: 3, backgroundColor: "rgba(20, 20, 20, 0.1)" }}>
        <Typography
          variant="h5"
          sx={{ mt: 3, padding: 2, justifyItems: "center" }}
        >
          Product Description
        </Typography>
        <Typography variant="body1" sx={{ padding: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>

        <Box sx={{ margin: 2 }}>
          <Box sx={{ display: "flex" }}>
            {" "}
            <FiberManualRecordIcon fontSize="small"> </FiberManualRecordIcon>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            {" "}
            <FiberManualRecordIcon fontSize="small"> </FiberManualRecordIcon>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
          </Box>
          <Box sx={{ display: "flex" }}>
            {" "}
            <FiberManualRecordIcon fontSize="small"> </FiberManualRecordIcon>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default SingleProduct;
