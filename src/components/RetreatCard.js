import React from 'react';
import './RetreatCard.css';
import { formatDate } from '../utils/formatDate';

function RetreatCard({ retreat }) {
  const formattedDate = formatDate(retreat.date);
  
  return (
    <div className="retreat-card">
    <img className='retreat-images' src={retreat.image} alt={retreat.title} />
    <h5 style={{fontWeight:'bold'}}>{retreat.title}</h5>
    <p className='retreat-description'>{retreat.description}</p>
    <span className='retreat-date'>Date: {formattedDate}</span>
    <br/>
    <span className='retreat-location'>Location: {retreat.location}</span>
    <br/>
    <span className='retreat-price'>Price: ${retreat.price}</span>
    <br/>
  </div>
  );
}

export default RetreatCard;
