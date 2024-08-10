import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
// import contactUs from "../../../../assets/contact us.jpg";
// import contactUs from "../../../../assets/contact.jpg";
import contactUs from "../../../../assets/contact2.jpg";

const Contact = () => {
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
              fontWeight: 600,
              fontSize: 60,
            }}
          >
           Contact Us
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
        </Box>
  
        <Box
        sx={{
          display: "flex",
          direction: "row",
          mt: 4,
          
        }}
      >

<Box sx={{ maxWidth: 400, flexGrow: 1, padding: "10px", mt: 2, 
  height: 400
}}>
          <Image src={contactUs}       
    objectFit='contain' width={600} height={400} alt="about" />
        </Box>



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
              molestiae eum ullam. Reprehenderit atque id vero consequuntur,
              nihil beatae similique porro quas suscipit unde quam explicabo. Ab
              quae unde sunt aliquid
           
            </Typography>
          </Box>
        </Box>

       
      </Box>
      </Container>
    );
};

export default Contact;