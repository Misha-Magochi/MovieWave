import React, { useState } from 'react';

const CustomRating = ({ onChange, value }) => {
  const stars = [1, 2, 3, 4, 5]; 

  return (
    <div style={{ margin: "0 5px" }}>
      {stars.map((star, index) => (
        <span
          key={index}
          style={{
            cursor: 'pointer',
            color: star <= value ? '#ffd700' : '#d3d3d3',
            fontSize: '24px'
          }}
          onClick={() => onChange(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default CustomRating;