import React from 'react';
import './RetreatCard.css';

function RetreatCard({ retreat }) {
  return (
    <div className='retreat-card'>
      <h5 style={{ fontWeight: 'bold' }}>{retreat.title || 'No title available'}</h5>
      <span>Date: {retreat?.date || 'N/A'}</span>
      <br/>
      <span>Location: {retreat?.location || 'N/A'}</span>
      <br/>
      <span>Price: {retreat?.price || 'N/A'}</span>
    </div>
  );
}

export default RetreatCard;
