import React from 'react';

const Column = ({ children }) => <div style={styles.container}>{children}</div>;

const styles = {
  container: {
    display: 'flex',
    width: '50%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export default Column;
