import React, { useState, useEffect } from "react";
import img1 from "../assets/slider/yoga1.jpeg";
import img2 from "../assets/slider/yoga2.jpeg";
import img3 from "../assets/slider/yoga3.jpeg";
import img4 from "../assets/slider/yoga4.jpeg";
import img5 from "../assets/slider/yoga5.jpeg";

const images = [
  { src: img1, alt: "Yoga group practicing outdoors" },
  { src: img2, alt: "Meditative yoga session in nature" },
  { src: img3, alt: "Yoga posture training class" },
  { src: img4, alt: "Mindfulness and breathing practice" },
  { src: img5, alt: "Community yoga wellness event" },
];

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(slider);
  }, []);

  const leftIndex = (index - 1 + images.length) % images.length;
  const rightIndex = (index + 1) % images.length;

  return (
    <section className="carousel-wrapper" aria-label="Highlights from yoga programs">
      <div className="carousel-container">
        <img
          src={images[leftIndex].src}
          alt={images[leftIndex].alt}
          className="carousel-image left"
          loading="lazy"
        />

        <img
          src={images[index].src}
          alt={images[index].alt}
          className="carousel-image center"
          fetchPriority="high"
        />

        <img
          src={images[rightIndex].src}
          alt={images[rightIndex].alt}
          className="carousel-image right"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default ImageCarousel;
