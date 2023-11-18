// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle  
            
            subHeading={"From 11:00am to 10:00pm"}
            heading={"Order Online"}>
            </SectionTitle>
            
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                freeMode={true}
                pagination={
                    {
                        clickable: true,
                    }
                }
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-24"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-4xl uppercase -mt-10 text-center  text-white'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-4xl uppercase -mt-10 text-center  text-white'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-4xl uppercase -mt-10 text-center  text-white'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-4xl uppercase -mt-10 text-center  text-white'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-4xl uppercase -mt-10 text-center  text-white'>Salads</h3>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;