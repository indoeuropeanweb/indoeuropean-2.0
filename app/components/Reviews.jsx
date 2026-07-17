"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const CARD_HEIGHT = 132;

const reviews = [
  {
    "name": "Samyrah",
    "location": "Delhi",
    "country": "Germany",
    "image": "/images/testimonial/testimonial-04.webp",
    "ratings": 5,
    "review": "I am incredibly grateful to Indo European for their unwavering support throughout my journey. Your guidance and assistance made my dream of studying in Germany a reality."
  },
  {
    "name": "Pari Sanan",
    "location": "Delhi",
    "country": "Germany",
    "image": "/images/testimonial/testimonial-05.webp",
    "ratings": 5,
    "review": "Thank you, Indo European, for your unwavering support and guidance. I overcame my 8-year study gap and achieved my dream of securing a Germany study visa."
  },
  {
    "name": "Parshant",
    "location": "Delhi",
    "country": "Germany",
    "image": "/images/testimonial/testimonial-06.webp",
    "ratings": 5,
    "review": "Indo European made my journey to success possible. With their expert guidance, I secured my Germany study visa and admission to a Bachelor of Business Administration program."
  },
  {
    "name": "Sachin",
    "location": "Delhi",
    "country": "France",
    "image": "/images/testimonial/testimonial-07.webp",
    "ratings": 5,
    "review": "Big thanks to Indo European for making my dream of studying in France come true! Their expert guidance throughout my visa process for my Master's in Food & Beverage Management was exceptional."
  },
  {
    "name": "Sarbjeet Singh",
    "location": "Delhi",
    "country": "France",
    "image": "/images/testimonial/testimonial-08.webp",
    "ratings": 5,
    "review": "I'm very grateful to Indo European for helping me every step of the way. Their guidance made my France study visa process smooth and hassle-free."
  },
  {
    "name": "Gaganpreet",
    "location": "Delhi",
    "country": "France",
    "image": "/images/testimonial/testimonial-09.webp",
    "ratings": 5,
    "review": "Grateful to Indo European for turning my dream into reality! Their professional guidance helped me secure my France visa for a Global MBA at Collège de Paris."
  },
  {
    "name": "Harsh",
    "location": "Delhi",
    "country": "Denmark",
    "image": "/images/testimonial/testimonial-10.webp",
    "ratings": 5,
    "review": "Thanks to Indo European, studying abroad in Denmark became a reality. From university selection to visa approval, the entire process was handled professionally."
  },
  {
    "name": "Sushank",
    "location": "Delhi",
    "country": "Italy",
    "image": "/images/testimonial/testimonial-11.webp",
    "ratings": 5,
    "review": "I'm grateful to Indo European for their exceptional guidance, from university selection to visa approval, making my dream of studying in Italy possible."
  },
  {
    "name": "Ankit Chadha",
    "location": "Delhi",
    "country": "Germany",
    "image": "/images/testimonial/testimonial-12.webp",
    "ratings": 5,
    "review": "I'm deeply grateful to Indo European for their unwavering support throughout my study abroad journey. From university selection to visa application, they were with me at every step."
  },
  {
    "name": "Arvinder Singh",
    "location": "Delhi",
    "country": "Latvia",
    "image": "/images/testimonial/testimonial-13.webp",
    "ratings": 5,
    "review": "I'm grateful to my Indo European coach for constant guidance throughout my journey to study in Latvia. Choosing the right university and securing my visa became effortless."
  },
  {
    "name": "Amit Kumar",
    "location": "Delhi",
    "country": "Hungary",
    "image": "/images/testimonial/testimonial-14.webp",
    "ratings": 5,
    "review": "Thanks to Indo European, I smoothly navigated my journey to study in Hungary. Their expert guidance from university selection to visa approval made my dream a reality."
  },
  {
    "name": "Prabhjot Singh",
    "location": "Delhi",
    "country": "Netherlands",
    "image": "/images/testimonial/testimonial-15.webp",
    "ratings": 5,
    "review": "Thanks to Indo European, my dream of studying in the Netherlands became a reality. Their expert guidance in university selection and visa processing made everything seamless."
  }
]

export default function Reviews() {
  const loopReviews = [...reviews, ...reviews];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);

  const [selectedReview, setSelectedReview] = useState(reviews[0]);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, [paused]);

  // Infinite Loop
  useEffect(() => {
    if (index === reviews.length) {
      const timer = setTimeout(() => {
        setAnimate(false);
        setIndex(0);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setAnimate(true);
          });
        });
      }, 700);

      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
      <div className="col-span-2 flex flex-col justify-center px-10 py-12">
        <div className="flex items-center gap-4">
          <Image
            src={selectedReview.image}
            alt={selectedReview.name}
            width={70}
            height={70}
            className="rounded-full object-cover border-2 border-secondary"
          />

          <div className="">
            <h3 className="font-Jakarta text-2xl font-semibold text-primary">
              {selectedReview.name}
            </h3>

            <p className="text-sm text-secondary">
              {selectedReview.country}
            </p>

            <div className="mt-2 flex gap-1">
              {Array.from({
                length: selectedReview.ratings,
              }).map((_, i) => (
                <FaStar
                  key={i}
                  className="size-4 text-secondary"
                />
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-lg leading-8 text-gray-600">
          <FaQuoteLeft className="inline-block size-6 mb-5 me-5 text-secondary"/>{selectedReview.review}<FaQuoteRight className="inline-block size-6 mt-5 ms-5 text-secondary" />
        </p>

        <div className="mt-8 relative">
          <p className="font-Jakarta text-lg font-semibold italic text-end">
            - {selectedReview.name}
          </p>

          <p className="text-end text-sm text-gray-500">
            {selectedReview.country}
          </p>
           <div className="h-50 w-50 bg-primary/10 rounded-full absolute -bottom-10 left-0" />
           <div className="h-25 w-25 bg-secondary/10 rounded-full absolute -bottom-10 left-40" />
        </div>
      </div>
      <div
        className="h-105 overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className={
            animate
              ? "transition-transform duration-700 ease-in-out"
              : ""
          }
          style={{
            transform: `translateY(-${index * CARD_HEIGHT}px)`,
          }}
        >
          {loopReviews.map((review, i) => (
            <div
              key={i}
              onClick={() => setSelectedReview(review)}
              className={`mb-3 cursor-pointer rounded-lg border-l-4 px-4 py-3 shadow-md transition-all duration-300 hover:scale-[1.02]
              ${
                selectedReview.name === review.name &&
                selectedReview.review === review.review
                  ? "border-secondary bg-secondary/10"
                  : "border-transparent bg-white hover:border-secondary"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Image
                    src={review.image}
                    alt={review.name}
                    width={42}
                    height={42}
                    className="rounded-full object-cover"
                  />

                  <div>
                    <h5 className="font-semibold text-sm">
                      {review.name}
                    </h5>

                    <p className="text-xs text-gray-500">
                      {review.country}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1">
                  {Array.from({
                    length: review.ratings,
                  }).map((_, j) => (
                    <FaStar
                      key={j}
                      className="size-3 text-secondary"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-3 line-clamp-3 text-xs leading-5 text-gray-600">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}