import React, { useState, useEffect } from 'react';

const RetreatsFilter = ({handleRangeChange,selectedRange}) => {

  return (
      <select className="dropbtn" onChange={handleRangeChange} value={selectedRange}>
        <option value="">Filter by date</option>
        <option value="2023-2024">2023-2024</option>
        <option value="2024-2025">2024-2025</option>
      </select>

    
  );
};

export default RetreatsFilter;
