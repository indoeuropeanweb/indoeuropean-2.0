"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';

const CountrySwiper = ({data}) => {

  return (
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            speed={2000}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            breakpoints={{
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 5,
            }}}
            modules={[Autoplay]}
            className="mySwiper"
            >
            {data.map((destination, index) => {
                return <SwiperSlide key={destination.id} className='mt-5'> 
                <Link className="flex justify-center items-center flex-col gap-4 group space-y-4" href={destination.link}>
                   <Image className="rounded-full group-hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer" height={125} width={125} src={destination.image} alt={`Study in ${destination.country}`}/>
                   <span className='text-xl text-primary font-bold font-Jakarta'>{destination.country}</span>
                </Link>
                </SwiperSlide>
            })}
        </Swiper>
  )
}

export default CountrySwiper