import React from 'react';
import './Filter.css';

function Filter() {
  return (
    <div className="filter col-11">
      <button>Filter by Date</button>
      <button>Filter by Type</button>
      <input type="text" placeholder="Search retreats by title" />
    </div>
  );
};

export default Filter;
