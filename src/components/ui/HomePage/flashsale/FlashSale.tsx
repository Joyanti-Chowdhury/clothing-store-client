import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

const clothes = [
  {
    id: 1,
    image: "https://i.ibb.co/h9YShB8/Tshirt9.jpg",
    title: "Basic Crewneck T-Shirt",
    price: 12.99,
    rating: 4.5,
    category: "T-shirts",
    description:
      "A classic crewneck t-shirt made from soft cotton fabric, perfect for everyday wear.",
  },
  {
    id: 2,
    image: "https://i.ibb.co/ssd47yw/jacket8.jpg",
    title: "Skinny jackets",
    price: 39.99,
    rating: 4.2,
    category: "Jackets",
    description:
      "Slim-fit jeans crafted from stretch denim for a comfortable yet stylish look.",
  },
  {
    id: 3,
    image: "https://i.ibb.co/HBkVYyT/Tshirt4.jpg",
    title: "Floral Print Maxi T-shirt",
    price: 59.99,
    rating: 4.8,
    category: "T-shirts",
    description:
      "A flowy maxi dress featuring a vibrant floral print, perfect for summer outings.",
  },
  {
    id: 4,
    image: "https://i.ibb.co/MDTLvqC/jacket6.jpg",
    title: "Denim Jacket",
    price: 69.99,
    rating: 4.7,
    category: "Jackets",
    description:
      "A classic denim jacket with button-up closure and front pockets, ideal for layering.",
  },
  {
    id: 5,
    image: "https://i.ibb.co/w7s8c5g/shirt3.jpg",
    title: "Canvas Sneakers shirt",
    price: 29.99,
    rating: 4.4,
    category: "Shirt",
    description:
      "Casual canvas sneakers with a lace-up design, perfect for everyday wear.",
  },
  {
    id: 6,
    image: "https://i.ibb.co/gtF0fH5/shirt5.jpg",
    title: "Pleated Shirt",
    price: 34.99,
    rating: 4.6,
    category: "Shirt",
    description:
      "A cute mini skirt featuring pleated detailing, great for creating a chic look.",
  },
  {
    id: 7,
    image: "https://i.ibb.co/NnHCCcN/jacket3.jpg",
    title: "Cable Knit Sweater",
    price: 54.99,
    rating: 4.3,
    category: "jacket",
    description:
      "A cozy cable knit sweater perfect for staying warm during chilly days.",
  },
  {
    id: 8,
    image: "https://i.ibb.co/W5pDhXG/kids2.jpg",
    title: "Chino Shorts",
    price: 29.99,
    rating: 4.5,
    category: "kids",
    description:
      "Classic chino shorts made from lightweight cotton, ideal for summer adventures.",
  },
  {
    id: 9,
    image: "https://i.ibb.co/b27NPHb/blazer3.jpg",
    title: "Classic Single-Breasted Blazer",
    price: 79.99,
    rating: 4.7,
    category: "Blazers",
    description:
      "A timeless single-breasted blazer crafted from high-quality wool blend fabric.",
  },
  {
    id: 10,
    image: "https://i.ibb.co/sPz4Wf4/kids9.jpg",
    title: "kids T-shirt",
    price: 19.99,
    rating: 4.6,
    category: "kids",
    description:
      "A genuine leather belt with a classic buckle closure, perfect for adding a finishing touch to your outfit.",
  },
];

const FlashSale = async () => {
  const res = await fetch(
    "https://clothing-store-server-blond.vercel.app/clothes",
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
      <Box sx={{ textAlign: "center", mt: 10 }}>
        <Typography
          variant="h3"
          component="h1"
          fontWeight={600}
          color={"#1586FD"}
          gutterBottom
        >
          Our Flash Sale
        </Typography>

        <Typography variant="h6" component="p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
          expedita magni minima praesentium, similique voluptas!
        </Typography>
      </Box>

      <Stack direction="row" gap={4} mt={5}>
        {data?.slice(0, 6).map((item: any) => (
          <Box
            key={item.id}
            sx={{
              flex: 1,
              width: "150px",
              height: "250px",
              backgroundColor: "rgb(245,245,245 , 1)",
              border: "1px solid rgba(250,250,250, 1)",
              // border:" 1px solid gray",
              borderRadius: "5px",
              textAlign: "center",
              padding: " 20px 10px",

              "& img": {
                width: "100px",
                height: "100px",
                margin: "0 auto",
              },

              "&:hover": {
                border: "1px solid gray",
                padding: " 20px 10px",
                borderRadius: "5px",
              },
            }}
          >
            <Image src={item.image} alt={item.title} width={100} height={100} />
            <Typography component="p" fontWeight={600} color={"#1586FD"} mt={2}>
              {item.title}
            </Typography>
          </Box>
        ))}
      </Stack>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button variant="outlined" color="primary" sx={{ mt: "10px" }}>
          View All
        </Button>
      </Box>
    </Container>
  );
};

export default FlashSale;
