"use client"
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form"
import Image from "next/image";
import logo from "@/assets/logo3.jpeg";
import { StayCurrentLandscape } from "@mui/icons-material";
import Link from "next/link";
import { modifyPayloadData } from "@/utils/modifyPayloadData";
import { userRegister } from "@/services/actions/userRegister";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


interface IUserData {
  name: string
  email: string
  password: string
  // phone: string
  // address: string
}


const RegisterPage = () => {

const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUserData>()
  const onSubmit: SubmitHandler<IUserData> = async(values) => {
    console.log(values)
  //  const data = modifyPayloadData(values)

    try {
      
      const res = await userRegister(values)
      if(res?.success){
        toast.success(res?.message)
        router.push("/login")
      }
   
    } catch (error : any) {
      console.log(error.message)

    }
  }

  return (
    <Container>
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack
          sx={{
            maxWidth: 600,
            width: "100%",
            boxShadow: 1,
            borderRadius: 1,
            padding: 4,
            textAlign: "center",
          }}
        >
         <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
         <Box >
            <Image  src={logo} alt="logo" width={50} height={50} />
          </Box>
          
           <Box>
           <Typography style={{ textAlign: "center",  fontWeight: "700", }}>Register</Typography>
           </Box>

         </Stack>
          <Box>
           
            <Box>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3} my={2}>
                  <Grid item md={12}>
                    <TextField
                          label="Name"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      {...register("name")} 
                    />
                  </Grid>
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
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      {...register("password")} 
                    />
                  </Grid>
                  {/* <Grid item md={6}>
                    <TextField
                      label="Phone"
                      type="tel"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      {...register("phone")} 
                    />
                  </Grid>
                  <Grid item md={6}>
                    <TextField
                      label="Address"
                      type="text"
                      variant="outlined"
                      size="small"
                      fullWidth={true}
                      {...register("address")} 
                    />
                  </Grid> */}
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
                  Do you have an account? <Link href="/login">Login</Link>
                </Typography>
              </form>
            </Box>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default RegisterPage;
