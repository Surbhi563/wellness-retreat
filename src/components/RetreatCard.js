import React from 'react';
import './RetreatCard.css';

function RetreatCard({ retreat }) {
  return (
    
    <div className="retreat-card">
    <img className='retreat-images' src={retreat.image} alt={retreat.title} />
    <h4 style={{fontWeight:'bold'}}>{retreat.title}</h4>
    <p>{retreat.description}</p>
    <span>Date: {retreat.date}</span>
    <br/>
    <span>Location: {retreat.location}</span>
    <br/>
    <span>Price: ${retreat.price}</span>
    <br/>
  </div>
  );
}

export default RetreatCard;
