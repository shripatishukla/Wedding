// ImageCarousel.jsx
import React, { useState, useEffect } from 'react';
import '../css/ImageText.css'; // Create a CSS file for styles

import image1 from '../store/Main_photo_ncth2.jpeg'; // Import your images

import image5 from '../store/Destinationwedding6.jpg';

const images = [image1,image5];
const description = ['','Destination Wedding'] // Use the imported images

function ImageText() {
  const [currentIndex, setCurrentIndex] = useState(0); // Initialize state for the current index

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Automatically move to the next image
    }, 2000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);


  return (
    <div className="carousel-container">
     
      <div className="image-container">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" /> {/* Display the current image */}
        <div className="text-overlay">
          <h1 id="maintext">New Comrade Tent House</h1>
          <h2>One Stop Solution For Your Events </h2>
          <h3>{description[currentIndex]}</h3>
        </div>
      </div>
      
    </div>
  );
}

export default ImageText;
