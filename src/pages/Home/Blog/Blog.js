import React, { useEffect, useState } from 'react';
import './Blog.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";

import { Autoplay, Pagination, Navigation } from "swiper";


import { makeStyles } from '@mui/styles';

const Blog = () => {

    const [userReview, setUserReview] = useState([]);


    useEffect( () => {
        fetch('http://localhost:5000/blogs')
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

console.log(userReview);
const {dentiClr, titleColor} = useStyle();

    return (
 
        <div>

            <div className='blog-section App'>
                                <Typography sx={{ fontWeight: 400, mb: 1}} variant="h6" component="div">
                                Dent<strong className={dentiClr}>Care</strong>
                    </Typography>
                    <Typography  className={titleColor} sx={{ fontWeight: 600, mb: 8}} variant="h4" component="div">
                        Articles
                    </Typography>
            <>

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
                        <div className='blog'>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                sx={{ height: 140 }}
                                image={review.img}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                {review.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                {review.message}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                            
                        </div>

                    </SwiperSlide>
                ))}
                </Swiper>
            </>
        </div>

        </div>

    );
};

export default Blog;