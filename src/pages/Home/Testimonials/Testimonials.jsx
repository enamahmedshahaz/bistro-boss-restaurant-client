import SectionTitle from "../../../components/SectionTitle/SectionTitle";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));

    }, []);

    return (
        <section className="my-5">
            <SectionTitle
                subHeading={"What Our Clients Say"}
                heading={"Testimonials"}
            ></SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {reviews.map(review =>
                    <SwiperSlide key={review._id}>
                        <div className="text-center px-40 flex flex-col gap-3 items-center py-10">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p>{review.details}</p>
                            <h3 className="text-orange-400 text-3xl">{review.name}</h3>
                        </div>
                    </SwiperSlide>)}
            </Swiper>

        </section>
    );
};

export default Testimonials;