import CategoryCard from "@/components/ui/categoryCard/CategoryCard";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { Button, CardActionArea, CardActions } from "@mui/material";
import Image from "next/image";
import GradeIcon from "@mui/icons-material/Grade";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Link from "next/link";
import Category from "@/components/ui/HomePage/category/Category";

const CategoriesPage = async () => {
//   const res = await fetch(
//     "https://grocery-store-server-red.vercel.app/categories",
//     {
//       next: {
//         revalidate: 30,
//       },
//     }
//   );
//   const Categories = await res.json();
  return (

       
    // <div>
    //   <div className="w-[90%] mx-auto">
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8">
    //       {Categories?.map((category: any) => (
    //         <CategoryCard key={category._id} category={category} />
    //       ))}
    //     </div>
    //   </div>
    // </div>

     <Category></Category>


  );
};

export default CategoriesPage;
