import React from 'react';
import format from '../utils/format';

const ItemButton = ({ item, onClick, disabled, showMultiple, visible }) => {
  const buttonColor = disabled ? 'lightgrey' : 'lightgreen';
  const showButtons = !visible ? { display: 'none' } : {};
  return (
    <div style={showButtons}>
      <p style={{ display: 'inline' }}>{item.count}</p>
      <button
        onClick={() => onClick(item)}
        disabled={disabled}
        style={{ backgroundColor: buttonColor }}
      >
        {item.price && format(item.price, 0)} {item.name}
      </button>
      {showMultiple && (
        <button onClick={() => onClick(item, 'all')}>Buy all</button>
      )}
    </div>
  );
};

export default ItemButton;
