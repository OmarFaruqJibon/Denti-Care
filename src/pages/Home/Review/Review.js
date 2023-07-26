import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import "./Review.css";
import Rating from 'react-rating';
import { Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';



const Review = () => {

    const [userReview, setUserReview] = useState([]);


    useEffect( () => {
        fetch('https://dent-care-server.onrender.com/reviews')
        .then(res => res.json())
        .then(data => setUserReview(data))
    }, []);

    const useStyle = makeStyles({
      
        titleColor:{
            color: '#115278'
        },
        dentiClr:{
            color: '#bc74a5'
        }
    });

    const {dentiClr, titleColor} = useStyle();

    return (
        <div className='review-section App'>
                                <Typography sx={{ fontWeight: 400, mb: 1}} variant="h6" component="div">
                        Dent<strong className={dentiClr}>Care</strong>
                    </Typography>
                    <Typography  className={titleColor} sx={{ fontWeight: 600, mb: 8}} variant="h4" component="div">
                        Patients Feedback
                    </Typography>

            <>
                {/* <Swiper
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
                    > */}

                <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        }}

                        breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >


                {userReview.map((review) => (
                    <SwiperSlide key={review.name}> 
                        <div className='review-container'>
                            <p>{review.message}</p>
                            <h2>{review.name}</h2>
                            <Rating className="star-icon"
                                                initialRating={review.rating}
                                                readonly
                                                emptySymbol="far fa-star"
                                                fullSymbol="fas fa-star"
                            />
                            
                        </div>
                    </SwiperSlide>
                ))}



{/* 

                   


{/* ------------------------------------------------------------------------------------------------------------------------ */}











                </Swiper>
            </>
        </div>
    );
};

export default Review;