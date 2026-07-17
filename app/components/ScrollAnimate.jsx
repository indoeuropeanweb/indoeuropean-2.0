"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollAnimate({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  className = "",
  once = true,
}) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);

          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setShow(false);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [once]);

  const directions = {
    left: "-translate-x-20",
    right: "translate-x-20",
    up: "translate-y-20",
    down: "-translate-y-20",
    scale: "scale-90",
  };

  return (
    <div
      ref={ref}
      className={`
        transition-all ease-out
        ${show ? "opacity-100 translate-x-0 translate-y-0 scale-100" : `opacity-0 ${directions[direction]}`}
        ${className}
      `}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}