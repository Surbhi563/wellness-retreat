import React from 'react';
import RetreatCard from './RetreatCard';
import './RetreatList.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function RetreatList() {
  const retreats = [
    {
      title: 'Forest Yoga Retreat',
      date: 'June 10-15, 2024',
      location: 'Redwood Forest, CA',
      price: '$1200',
    },
    {
      title: 'Lake Meditation Retreat',
      date: 'July 21-26, 2024',
      location: 'Lake Tahoe, NV',
      price: '$1400',
    },
    {
      title: 'Spa Detox Retreat',
      date: 'August 5-10, 2024',
      location: 'Aspen, CO',
      price: '$1800',
    },
  ];

  return (
    <div className="container">
      <div className="row">
        {retreats.map((retreat, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <RetreatCard retreat={retreat} />
          </div>
        ))}
      </div>
      <div className="pagination d-flex justify-content-center mt-4 mb-4">
        <button className="btn btn-primary mx-2">Previous</button>
        <button className="btn btn-primary mx-2">Next</button>
      </div>
    </div>
  );
};

export default RetreatList;
