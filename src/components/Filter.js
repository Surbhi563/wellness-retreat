import React from 'react';
import './Filter.css';

function Filter({setSearch, filter, setFilter}) {
  return (
    <div className="filter col-11">
 <select className='dropbtn'onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="">Filter by Date</option>
          <option value="2023-2024">2023-2024</option>
          <option value="2024-2025">2024-2025</option>
        
        </select>    <select className='dropbtn'onChange={(e) => setFilter(e.target.value)} value={filter}>
          <option value="">Filter by type</option>
          <option value="Wellness">Wellness</option>
          <option value="Yoga">Yoga</option>
          <option value="Meditation">Meditation</option>
          <option value="Detox">Detox</option>
        </select>
    <input
      type="text"
      placeholder="Search retreats by title"
      onChange={(e) => setSearch(e.target.value)}
    />
    </div>
  );
};

export default Filter;
