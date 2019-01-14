import React from 'react';
import format from '../utils/format';

const ItemButton = ({ item, onClick, disabled, showMultiple }) => {
  const buttonColor = disabled ? 'lightgrey' : 'lightgreen';
  return (
    <div style={styles.container}>
      <p style={styles.count}>{item.count}</p>
      <button
        onClick={() => onClick(item)}
        disabled={disabled}
        style={{
          backgroundColor: buttonColor,
          width: 100,
          borderRadius: 5,
          marginLeft: 10
        }}
      >
        {item.price && format(item.price, 0)} {item.name}
      </button>
      {showMultiple && (
        <button onClick={() => onClick(item, 'all')}>Buy all</button>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: 200,
    margin: 10,
    justifyContent: 'center'
  },
  count: {
    display: 'inline',
    width: 20
  }
};

export default ItemButton;
