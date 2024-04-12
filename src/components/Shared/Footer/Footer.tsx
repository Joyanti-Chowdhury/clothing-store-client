import { Box, Button, Container, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import facebookImg from '../../../assets/facebook.jpg';
import instagramImg from '../../../assets/insta.jpg';
import twitterImg from '../../../assets/twiter.jpg';
import linkedinImg from '../../../assets/linkedin.png';



const Footer = () => {
    return (
        <Box bgcolor="rgb(17,26,34)">
            <Container>
            <Stack direction="row"
            justifyContent="center"
            gap={4}
            p={2}
            >
                <Typography color="#fff" component={Link} href="/category" >Category</Typography>
                <Typography color="#fff" component={Link} href="/trending-products">Trending Products</Typography>
                <Typography color="#fff" component={Link} href="/login">Category</Typography>
                <Typography color="#fff" component={Link} href="/login">Category</Typography>
            </Stack>
            <Stack direction="row"
            justifyContent="center"
            gap={4}
            py={2}
            >
              <Image src={facebookImg} width={30} height={30}  alt="facebook"></Image>
              <Image src={instagramImg} width={30} height={30}  alt="instaImage"></Image>
              <Image src={twitterImg} width={30} height={30}  alt="twitterImg"></Image>
              <Image src={linkedinImg} width={30} height={30}  alt="linkedin"></Image>
              
            </Stack>
              
     
         
            </Container>
        </Box>
    );
};

export default Footer;