import React from 'react';

const ItemButton = ({ item, onClick, disabled, showMultiple }) => (
  <div>
    <p style={{ display: 'inline' }}>{item.count}</p>
    <button onClick={() => onClick(item)} disabled={disabled}>
      {item.price && item.price.toFixed(0)} {item.name}
    </button>
    {showMultiple && (
      <button onClick={() => onClick(item, 'all')}>Buy all</button>
    )}
  </div>
);

export default ItemButton;
