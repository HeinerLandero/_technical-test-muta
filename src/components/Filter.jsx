import React, { useState } from 'react';

export const Filter = ({ onFilterChange }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setFilter(value);
    onFilterChange(value);
  };

  return (
    <input
      type="text"
      placeholder="Filter by name or type"
      value={filter}
      onChange={handleFilterChange}
    />
  );
};
