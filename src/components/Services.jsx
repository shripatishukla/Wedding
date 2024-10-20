import React, { useEffect } from 'react';
import '../css/Services.css';
import weddingstage from '../store/weddingstage.jpg';
import tent from '../store/tentrent.avif';
import cooking from '../store/cooking.webp';

function Services() {
  useEffect(() => {
    const handleScroll = () => {
      const serviceItems = document.querySelectorAll('.service-item');

      serviceItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          item.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to check if elements are already in view

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="services" className="p-5 text-center">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-item left">
          <h3>Tent Rentals</h3>
          <p>We offer a variety of tents for all types of events, including:</p>
          <ul>
            <li>Weddings</li>
            <li>Corporate Events</li>
            <li>Birthday Parties</li>
            <li>Festivals and Fairs</li>
          </ul>
          <p>Choose from different sizes and styles to match your theme!</p>
          <img src={tent} alt="Tent Rentals" />
        </div>
        <div className="service-item up">
          <h3>Cooking</h3>
          <p>Top Notch Food Services offering:</p>
          <ul>
            <li>Customized Menus</li>
            <li>Catering for All Occasions</li>
            <li>Buffet and Plated Service</li>
            <li>On-Site Cooking</li>
          </ul>
          <p>We use fresh, high-quality ingredients to ensure a delicious experience!</p>
          <img src={cooking} alt="Cooking Services" />
        </div>
        <div className="service-item right">
          <h3>Stage Setup</h3>
          <p>Professional stage setup for any performance, including:</p>
          <ul>
            <li>Sound and Lighting Equipment</li>
            <li>Backdrop and Decor</li>
            <li>Seating Arrangements</li>
            <li>Technical Support</li>
          </ul>
          <p>We ensure your event runs smoothly with our experienced team!</p>
          <img src={weddingstage} alt="Stage Setup" />
        </div>
      </div>
    </section>
  );
}

export default Services;
