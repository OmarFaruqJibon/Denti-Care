import React from 'react';
// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import "./Review.css";




const Review = () => {
    return (
        <div>
            <h1>User Review</h1>


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
                        <div>
                            <h1>John Duo</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere rem natus blanditiis quas iste iusto assumenda asperiores sunt voluptatibus.</p>
                        </div>
                    </SwiperSlide>
                
                    <SwiperSlide> 
                        <div>
                            <h1>John Duo</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere rem natus blanditiis quas iste iusto assumenda asperiores sunt voluptatibus.</p>
                        </div>
                    </SwiperSlide>
                
                    <SwiperSlide> 
                        <div>
                            <h1>John Duo</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere rem natus blanditiis quas iste iusto assumenda asperiores sunt voluptatibus.</p>
                        </div>
                    </SwiperSlide>
                
                    <SwiperSlide> 
                        <div>
                            <h1>John Duo</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi facere rem natus blanditiis quas iste iusto assumenda asperiores sunt voluptatibus.</p>
                        </div>
                    </SwiperSlide>
                



                </Swiper>
            </>




















        </div>
    );
};

export default Review;