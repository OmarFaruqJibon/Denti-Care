import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import "./Review.css";
import Rating from 'react-rating';



const Review = () => {

    const [userReview, setUserReview] = useState([]);


    useEffect( () => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setUserReview(data))
    }, [])



    return (
        <div className='review-section'>
            <h1>User Review</h1>

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
                    <SwiperSlide> 
                        <div className='review-container'>
                            <p>{review.message}</p>
                            <h1>{review.name}</h1>
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