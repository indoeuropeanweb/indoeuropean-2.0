'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Link from 'next/link';

import {EffectFade, Autoplay, Pagination } from 'swiper/modules';

export default function SwiperSlider({heroSlides}) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay, Pagination]}
        className="mySwiper w-full h-110"
      >
        {heroSlides?.map((slide, index) => {
            return <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className="h-110 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              >
                <div className="max-w-6xl mx-auto flex h-full">
                  <div
                    className={`max-w-100 md:max-w-120 lg:max-w-150 my-auto mx-10 transition-all duration-900 delay-500 ease-out ${
                      isActive
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-16 opacity-0"
                    }`}
                  >
                    <h1 className="font-outfit text-xl md:text-2xl lg:text-4xl font-semibold">
                      {slide.title}
                    </h1>
                    <h4 className="font-manrope text-xl md:text-2xl lg:text-4xl md:leading-14 mt-3">
                      {slide.subtitle}
                    </h4>
                    <div
                      className={`flex flex-col sm:flex-row gap-5 mt-10 transition-all duration-900 delay-500 ease-out ${
                        isActive
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                    >
                      <Link
                        href={slide.primaryButton.link}
                        className="bg-primary border-2 border-primary text-white px-4 py-2 rounded-md flex justify-center items-center gap-3"
                      >
                        {slide.primaryButton.icon}
                        {slide.primaryButton.text}
                      </Link>
                      <Link
                        href={slide.secondaryButton.link}
                        className="border-2 border-primary text-primary px-4 py-2 rounded-md flex justify-center items-center gap-3"
                      >
                        {slide.secondaryButton.icon}
                        {slide.secondaryButton.text}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        })}
      </Swiper>
    </>
  );
}
