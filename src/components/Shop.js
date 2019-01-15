import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ButtonRow from './ButtonRow';
import FadeIn from './common/FadeIn';
import { priceOfMultiple } from '../utils/numberUtils';

const Shop = ({ fbp, onClick, items }) => (
  <div style={styles.container}>
    <h3>Shop</h3>
    <FadeIn>
      {Object.values(items).map(item => {
        const show = item.show ? items[item.show].count > 0 : true;
        const enableMax = fbp >= item.price + item.price * 1.3;
        const enable10 = fbp >= priceOfMultiple(item.price, 10);
        const enable25 = fbp >= priceOfMultiple(item.price, 25);
        return (
          show && (
            <ButtonRow
              key={item.name}
              disabled={fbp <= item.price - 1}
              item={item}
              onClick={onClick}
              enableMax={enableMax}
              enable10={enable10}
            />
          )
        );
      })}
    </FadeIn>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 500
  }
};

Shop.propTypes = {
  fbp: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  items: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  items: state.items.items,
  fbp: state.items.fbp
});

export default connect(mapStateToProps)(Shop);
