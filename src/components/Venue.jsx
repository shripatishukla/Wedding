import React from 'react';
import '../css/Venue.css'; // Optional: add your CSS file for styling
import atoot from '../store/atoot.avif';
import rangoli from '../store/Rangoli.jfif';

const venuesData = [
  { title: 'Atoot Bandhan', icon: 'fa-map-marker', image: atoot },
  { title: 'Atoot Bandhan', icon: 'fa-map-marker', image: atoot },
  { title: 'Rangooli', icon: 'fa-map-marker', image: rangoli },
];

function Venues() {
  return (
    <div id="venue" className="container">
      <h2 className="text-center wow fadeInDown">Venues</h2>

     

      <div className="row justify-content-center bottom-space">
        {venuesData.map((venue, index) => (
          <div key={index} className="col-lg-4 col-md-6 col-sm-12 venue-item wow fadeIn">
            <img src={venue.image} className="img-responsive img-thumbnail" alt={venue.title} />
            <p className="desti-heading">{venue.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Venues;
