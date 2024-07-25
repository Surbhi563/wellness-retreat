import React from 'react';
import './DiscoverCard.css';
import Yoga from '../images/yoga.jpeg';

const DiscoverCard = () => {
  return (
    <div className="discover-card col-11">
        <img className="yoga" src={Yoga} alt='yoga'/>
      <h2>Discover Your Inner Peace</h2>
      <p>Join us for a series of wellness retreats designed to help you find tranquility and rejuvenation.</p>
    </div>
  );
};

export default DiscoverCard;
