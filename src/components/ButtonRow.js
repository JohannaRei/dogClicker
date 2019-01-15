import React from 'react';
import { format } from '../utils/numberUtils';
import ItemButton from './common/ItemButton';

const ButtonRow = ({
  item,
  onClick,
  disabled,
  enableMax,
  enable10,
  enable25
}) => (
  <div style={styles.container}>
    <p style={styles.count}>{item.count}</p>
    <ItemButton onClick={() => onClick(item)} disabled={disabled}>
      {item.price && format(item.price, 0)} {item.name}
    </ItemButton>
    <ItemButton
      onClick={() => onClick(item, 'max')}
      disabled={!enableMax}
      multi
    >
      Buy max
    </ItemButton>
    <ItemButton onClick={() => onClick(item, 10)} disabled={!enable10} multi>
      Buy 10
    </ItemButton>
    <ItemButton onClick={() => onClick(item, 25)} disabled={!enable25} multi>
      Buy 25
    </ItemButton>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: 400,
    marginLeft: 200
  },
  count: {
    display: 'inline',
    width: 20
  }
};

export default ButtonRow;
