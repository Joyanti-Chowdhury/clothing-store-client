import AboutUs from "@/components/ui/HomePage/About/AboutUs";
import Category from "@/components/ui/HomePage/category/Category";
import Contact from "@/components/ui/HomePage/Contact/Contact";
import FlashSale from "@/components/ui/HomePage/flashsale/FlashSale";
import HeroSection from "@/components/ui/HomePage/HeroSection/HeroSection";
import Promotional from "@/components/ui/HomePage/promotional/Promotional";
import Return from "@/components/ui/HomePage/return/Return";
import TrendingProducts from "@/components/ui/HomePage/TrendingProducts/TrendingProducts";
import { Button } from "@mui/material";

const Homepage = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <FlashSale></FlashSale>
      <Category></Category>
      <Return></Return>
      <TrendingProducts></TrendingProducts>
      <Promotional></Promotional>
      <AboutUs></AboutUs>
      <Contact></Contact>
    </>
  );
};

export default Homepage;
