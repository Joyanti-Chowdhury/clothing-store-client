"use client"
import { Box, Button, Container, Grid, Stack, TextField, Typography } from '@mui/material';
import Image from 'next/image';
import logo from "@/assets/logo3.jpeg";
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { userRegister } from '@/services/actions/userRegister';
import { userLogin } from '@/services/actions/userLogin';
import { useRouter } from "next/navigation";
import { toast } from 'sonner';
 export  type FormValues ={  
  
  email: string
  password: string
 
}
const LoginPage = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();

  const router = useRouter();
  const onSubmit: SubmitHandler<FormValues> = async(values : any) => {


    //  console.log(values)
 
     try {
       
     const res = await userLogin(values)
     console.log(res);
     if (res?.success) {
      toast.success(res?.message);
      router.push("/");
    }
    
     } catch (error : any) {
       console.log(error.message);
 
     }
   };


    return (
        <Container>
            <Stack sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }} spacing={2}>
          
          <Box  sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: "5px",
            padding: "10px",
          }}>
               <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
         <Box>
            <Image  src={logo} alt="logo" width={50} height={50} />
          </Box>
          
           <Box>
           <Typography style={{ textAlign: "center",  fontWeight: "700", }}>Login</Typography>
           </Box>

         </Stack>

         <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3} my={2}>
                
                  <Grid item md={6}>
                    <TextField
                    
                      label="Email"
                      type="email"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      {...register("email")} 
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      label="Password"
                      type="password"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      {...register("password")} 
                    
                    />
                  </Grid>
                 
              
                </Grid>
                <Typography
                  style={{
                    textAlign: "end",
                    fontWeight: "300",
                    fontVariant: "P",
                    marginBottom: "10px",
                  }}
                >
                  <Link href="">Forgot Password?</Link>
                </Typography>
                <Button
                  sx={{ margin: "10px  0px" }}
                  variant="contained"
                  fullWidth={true}
                  type="submit"
                >
                 Login
                </Button>
                <Typography
                  style={{
                    textAlign: "center",
                    fontWeight: "300",
                    fontVariant: "P",
                  }}
                >
                  Don&apos;t you have an account? <Link href="/register">Create an account</Link>
                </Typography>
              </form>
            </Box>
          </Box>
            </Stack>
        </Container>
    );
};

export default LoginPage;