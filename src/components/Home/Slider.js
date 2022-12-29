import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper";
import img0 from "../../assets/banner/banner0.webp"
import img1 from "../../assets/banner/banner1.webp"
import img2 from "../../assets/banner/banner2.webp"
import img3 from "../../assets/banner/banner3.webp"
import img4 from "../../assets/banner/banner4.webp"
import img5 from "../../assets/banner/banner5.webp"
const Slider = () => {
    return (
        <div className='mt-10'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='w-full' src={img0} alt="" srcSet="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src={img1} alt="" srcSet="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src={img2} alt="" srcSet="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src={img3} alt="" srcSet="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src={img4} alt="" srcSet="" /></SwiperSlide>
        <SwiperSlide><img className='w-full' src={img5} alt="" srcSet="" /></SwiperSlide>
      </Swiper>
        </div>
    );
};

export default Slider;