import { Button, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import Dashboard from '../../ui/dashboard/Dashboard';


const Navbar = () => {
    return (
        <Container>
          <Stack py={2} direction="row" justifyContent="space-between"
          alignItems="center" spacing={1}>
           <Typography variant="h4" component={Link} href={"/"} fontWeight={600}>Clothing Store</Typography>
            
            <Stack direction="row"
            justifyContent="space-between"
            gap={4}
            >
                <Typography component={Link} href="/" >Home</Typography>
                <Typography component={Link} href="/products"> All Products</Typography>
                <Typography component={Link} href="/product">Single Product</Typography>
                <Typography component={Link} href="/flash-sale">Flash Sale</Typography>
                <Typography component={Link} href="/dashboard">Dashboard</Typography>
            </Stack>
               <Button component={Link} href="/login">Login</Button>

     
          </Stack>
        </Container>
    );
};

export default Navbar;