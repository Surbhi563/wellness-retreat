import React from 'react';
import './Filter.css';

function Filter({onDateFilterChange,
  onTypeFilterChange,
  onSearchChange}) {
  return (
    <div className="filter col-11">
     <button onClick={onDateFilterChange}>Filter by Date</button>
    <button onClick={onTypeFilterChange}>Filter by Type</button>
    <input
      type="text"
      placeholder="Search retreats by title"
      onChange={(e) => onSearchChange(e.target.value)}
    />
    </div>
  );
};

export default Filter;
