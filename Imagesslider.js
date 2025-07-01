import React, { useState, useEffect } from "react";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div style={{ position: "relative", width: "100%", height: 300, overflow: "hidden", borderRadius: 10, marginBottom: 20 }}>
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`slide-${i}`}
          style={{
            position: "absolute",
            width: "100%",
            height: "300px",
            objectFit: "cover",
            transition: "opacity 1s ease-in-out",
            opacity: i === currentIndex ? 1 : 0,
          }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
              
