import { Box, Container, Divider, Typography } from "@mui/material";
import Image from "next/image";
import aboutus from "../../../../assets/about us.jpg";

const AboutUs = () => {
  return (
    <Container>
      <Box>
        <Typography
          component="h5"
          variant="h3"
          sx={{
            textAlign: "center",
            mt: 10,
            color: "#1586FD",
            fontWeight:"bold",
            fontSize: 60,
          }}
        >
          About Us
        </Typography>

        <Typography
          component="p"
         
          sx={{
            textAlign: "center",
            fontWeight: 600,
            mt: 2,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, natus?
        </Typography>
        <Divider></Divider>
      </Box>

      <Box
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
              p: 1,
            }}
          >
            <Typography
              variant="h6"
              component="p"
              sx={{
                p: 1,
                overflow: "hidden",
                textAlign: "justify",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              magnam, at tenetur totam quae vitae dolor est deserunt sint vero
              earum dicta nemo, quibusdam aut excepturi ducimus. Porro dolorum,
              placeat, excepturi cumque culpa dolore officia eius debitis
              molestiae eum ullam. Reprehenderit atque id vero consequuntur,
              nihil beatae similique porro quas suscipit unde quam explicabo. Ab
              quae unde sunt aliquid deserunt in nisi fugit officia porro
              numquam iste iure doloribus iusto veritatis optio exercitationem
              saepe rem, consequuntur libero aliquam neque nulla eius
            </Typography>
          </Box>
        </Box>

        <Box sx={{ maxWidth: 400, flexGrow: 1, padding: "10px", mt: 2 }}>
          <Image src={aboutus} width={400} height={400} alt="about" />
        </Box>
      </Box>
    </Container>
  );
};

export default AboutUs;
