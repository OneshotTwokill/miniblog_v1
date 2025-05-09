import styled from 'styled-components';
import { useState } from 'react';


const StyledButton = styled.div`
  width: 46px;
  height: 46px;
  background-color: ${props => props.color || '#e0e0e0'};
  border-radius: 50%;
  display: flex;
  margin-right: 28px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: outline 0.2s ease;
  &:hover {
    opacity: 0.85;
  }
  &.active {
    outline: 2.5px solid #C2C2C2;       
    outline-offset: 3px;          
  }
`

function ColorButton({ color, isActive, onClick }) {
  return (
    <StyledButton
      color={color}
      className={isActive ? 'active' : ''}
      onClick={onClick}
    />
  );
}

export default ColorButton;