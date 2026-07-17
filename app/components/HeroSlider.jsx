"use client";

import { useEffect, useState } from "react";
import GlobalForm from "./GlobalForm";

const slides = [
  {
    id: 1,
    country: "Germany",
    image: "/images/universities/germany.webp",
  },
  {
    id: 2,
    country: "Denmark",
    image: "/images/universities/denmark.webp",
  },
  {
    id: 3,
    country: "Latvia",
    image: "/images/universities/latvia.webp",
  },
  {
    id: 4,
    country: "Lithuania",
    image: "/images/universities/lithuania.webp",
  },
  {
    id: 5,
    country: "Netherlands",
    image: "/images/universities/netherlands.webp",
  }
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);

      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setAnimate(true);
      }, 250);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-full lg:max-h-150 w-full py-12 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 w-full ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-black/10 w-full" />
      <div className="relative z-1 flex h-full w-full items-center md:px-8 py-12 md:py-0">
        <div className="mx-auto max-w-6xl">
        <div className="grid w-full gap-5 lg:grid-cols-2 md:px-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-18.75 text-white text-center md:text-start font-Jakarta">
              Start Your Study
              <br />
              <span className="text-center md:text-start inline-block">Abroad Journey With</span><br />
              <span className="relative inline-block h-19 min-w-65 md:min-w-90 overflow-hidden align-bottom text-center md:text-start">
                <span
                  className={`absolute left-0 text-secondary transition-all duration-500 ${
                    animate
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-full opacity-0"
                  }`}
                >
                  {slides[current].country}
                </span>
              </span>
            </h1>
          </div>

          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative z-1 w-full max-w-md rounded-xl border border-white/20 bg-white/10 p-8 backdrop-blur-md">
              <GlobalForm />
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}