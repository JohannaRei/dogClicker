import React from 'react';

const ItemButton = ({ onClick, disabled, children, multi }) => {
  const buttonColor = disabled ? 'lightgrey' : 'lightgreen';
  const width = multi ? 50 : 100;
  const buttonStyle = {
    backgroundColor: buttonColor,
    width,
    margin: 5,
    borderRadius: 5
  };
  return (
    <button onClick={onClick} disabled={disabled} style={buttonStyle}>
      {children}
    </button>
  );
};

export default ItemButton;
