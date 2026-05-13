import React, { useState, useEffect } from "react";
import img1 from "../assets/slider/yoga1.jpeg";
import img2 from "../assets/slider/yoga2.jpeg";
import img3 from "../assets/slider/yoga3.jpeg";
import img4 from "../assets/slider/yoga4.jpeg";
import img5 from "../assets/slider/yoga5.jpeg";

const images = [
  {
    src: img1,
    alt: "Yoga group practicing outdoors",
    title: "Holistic Daily Practice",
    subtitle: "Traditional yoga sessions for strength, flexibility, and inner harmony.",
  },
  {
    src: img2,
    alt: "Meditative yoga session in nature",
    title: "Mindful Stillness",
    subtitle: "Guided breath and meditation routines for emotional clarity and calm.",
  },
  {
    src: img3,
    alt: "Yoga posture training class",
    title: "Posture & Discipline",
    subtitle: "Structured classes that cultivate grace, focus, and body awareness.",
  },
  {
    src: img4,
    alt: "Mindfulness and breathing practice",
    title: "Sacred Breathwork",
    subtitle: "Pranayama-centered training to support balance and deep restoration.",
  },
  {
    src: img5,
    alt: "Community yoga wellness event",
    title: "Community Wellness",
    subtitle: "Open wellness gatherings designed to uplift every generation.",
  },
];

function ImageCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4200);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="carousel-wrapper section-card" aria-label="Wellness highlights">
      <div className="carousel-heading">
        <h2>Wellness Gallery</h2>
        <p>A glimpse into the spiritual and wellness journey at Gayatri Yog Gurukulam Foundation.</p>
      </div>

      <div className="carousel-stage">
        {images.map((image, imageIndex) => (
          <article
            key={image.src}
            className={`carousel-slide ${imageIndex === index ? "is-active" : ""}`}
            aria-hidden={imageIndex !== index}
          >
            <img src={image.src} alt={image.alt} loading={imageIndex === index ? "eager" : "lazy"} />
            <div className="slide-overlay">
              <h3>{image.title}</h3>
              <p>{image.subtitle}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="carousel-dots" aria-label="Carousel slide indicators">
        {images.map((_, dotIndex) => (
          <button
            key={`dot-${dotIndex}`}
            type="button"
            className={`dot ${dotIndex === index ? "active" : ""}`}
            onClick={() => setIndex(dotIndex)}
            aria-label={`Go to slide ${dotIndex + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default ImageCarousel;
