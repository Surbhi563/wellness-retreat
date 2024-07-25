import React from 'react';
import RetreatCard from './RetreatCard';
import './RetreatList.css';

function RetreatList({ retreats }) {
  return (
    <div className="container2">
      <div className="row justify-content-center">
        <div className="col-11">
          <div className="row">
            {retreats.map((retreat, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <RetreatCard key={retreat.id} retreat={retreat} />
              </div>
            ))}
          </div>
          <div className="pagination d-flex justify-content-center mt-4 mb-4">
            <button className="btn pagination-buttons mx-2">Previous</button>
            <button className="btn pagination-buttons mx-2">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetreatList;
