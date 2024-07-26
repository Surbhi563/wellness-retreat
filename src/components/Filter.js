import React from 'react';
import './Filter.css';
import RetreatsFilter from './DateDropdown';

function Filter({setSearch, filter, setFilter, setRetreats, handleRangeChange, selectedRange}) {
  return (
    <div className="filter col-11">
        <RetreatsFilter setRetreats={setRetreats} handleRangeChange={handleRangeChange} selectedRange={selectedRange}/>
        <select className='dropbtn'onChange={(e) => setFilter(e.target.value)} value={filter}>
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
