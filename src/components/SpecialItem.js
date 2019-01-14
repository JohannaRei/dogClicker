import React from 'react';
import FadeIn from './common/FadeIn';

const SpecialItem = ({ onClick, show }) => (
  <div style={styles.container}>
    <FadeIn>
      {show && (
        <button key="special" style={styles.button} onClick={onClick}>
          WOW
        </button>
      )}
    </FadeIn>
  </div>
);

const styles = {
  container: {
    width: 100
  },
  button: {
    backgroundColor: 'red',
    height: 50,
    width: 50,
    borderRadius: 5
  }
};

export default SpecialItem;
