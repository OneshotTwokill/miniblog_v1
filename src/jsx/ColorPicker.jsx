import { useState, useEffect } from 'react';
import ColorButton from './ColorButton';
import { db } from '../firebase'; 
import { useParams } from 'react-router-dom';

function ColorPicker({ value, onChange }) {
    const colors = ['#D35456', '#FE9015', '#FEE315', '#63D354', '#1595FE'];
    const activeIndex = colors.findIndex((c) => c === value);
  
    const handleColorClick = (index) => {
      const selectedColor = colors[index];
      onChange(selectedColor);
    };
  
    return (
      <div style={{ display: 'flex' }}>
        {colors.map((color, index) => (
          <ColorButton
            key={index}
            color={color}
            isActive={activeIndex === index}
            onClick={() => handleColorClick(index)}
          />
        ))}
      </div>
    );
  }

export default ColorPicker;
