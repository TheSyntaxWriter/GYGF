import React, { useState, useEffect } from "react";
import "./ImageCarousel.css";

import img1 from "../assets/slider/yoga1.jpeg";
import img2 from "../assets/slider/yoga2.jpeg";
import img3 from "../assets/slider/yoga3.jpeg";
import img4 from "../assets/slider/yoga4.jpeg";
import img5 from "../assets/slider/yoga5.jpeg";

const images = [img1, img2, img3, img4, img5];

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  const leftIndex = (index - 1 + images.length) % images.length;
  const rightIndex = (index + 1) % images.length;

  return (
    <div className="carousel-container">
      <img src={images[leftIndex]} className="carousel-image left" />

      <img src={images[index]} className="carousel-image center" />

      <img src={images[rightIndex]} className="carousel-image right" />
    </div>
  );
}

export default ImageCarousel;
