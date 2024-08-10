"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Box } from '@mui/material';
import promoImg1 from '../../../../assets/promo.jpg'
import promoImg2 from '../../../../assets/promotional1.jpg'
import promoImg3 from '../../../../assets/promotional2.jpg'
import promoImg4 from '../../../../assets/promotional3.jpg'
import promoImg5 from '../../../../assets/promotional4.jpg'
import promoImg8 from '../../../../assets/promotional6.jpg'
// import promoImg6 from '../../../../assets/promotional5.jpg'
import promoImg7 from '../../../../assets/promotional image.jpeg'
import Image from 'next/image';
import { Fullscreen } from '@mui/icons-material';



import * as React from "react"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"

const animation = { duration: 20000, easing: (t: number) => t }


const Promotional = () => {

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    renderMode: "performance",
    drag: false,
    created(s) {
      s.moveToIdx(5, true, animation)
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation)
    },
  })


    return (
        <div>

<div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide number-slide1">
        <Image src={promoImg5} height={10} width={900} alt={''} />
      </div>
      <div className="keen-slider__slide number-slide2">
        <Image src={promoImg8} height="10" width={900} alt={''} />
      </div>
      <div className="keen-slider__slide number-slide3">

      <Image src={promoImg5} height="10" width={900} alt={''} />


      </div>
      <div className="keen-slider__slide number-slide4">
      <Image src={promoImg7} height="10" width={900} alt={''} />

      </div>
      <div className="keen-slider__slide number-slide5">

      {/* <Image src={promoImg7} height={10} width={900} alt={''} /> */}
      </div>
     
    </div>







{/* 
               <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Box>
                     <Image src={promoImg1} height={10} width={900} alt={''} /> 
            </Box>
        </SwiperSlide>
        <SwiperSlide> <Image src={promoImg2} height={50} width={900} alt={''} /> </SwiperSlide>
        <SwiperSlide> <Image src={promoImg3} height={50} width={900} alt={''} /> </SwiperSlide>
        <SwiperSlide> <Image src={promoImg4} height={50} width={900} alt={''} /> </SwiperSlide>
       
      </Swiper>
    </> */}
        </div>
    );
};

export default Promotional;