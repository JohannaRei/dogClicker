import React from 'react';

const SpecialItem = ({ onClick }) => (
  <div>
    <button style={styles.button} onClick={onClick}>
      WOW
    </button>
  </div>
);

const styles = {
  button: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
    borderRadius: 5
  }
};

export default SpecialItem;
