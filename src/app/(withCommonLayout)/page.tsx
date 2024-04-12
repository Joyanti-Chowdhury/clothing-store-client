import Category from '@/components/ui/HomePage/category/Category';
import FlashSale from '@/components/ui/HomePage/flashsale/FlashSale';
import HeroSection from '@/components/ui/HomePage/HeroSection/HeroSection';
import TrendingProducts from '@/components/ui/HomePage/TrendingProducts/TrendingProducts';
import { Button } from '@mui/material';

const Homepage = ()   => {

  return (
    
    <>
   <HeroSection></HeroSection>
   <FlashSale></FlashSale>
   <Category></Category>
   <TrendingProducts></TrendingProducts>
      
    </>
  );
};

export default Homepage;