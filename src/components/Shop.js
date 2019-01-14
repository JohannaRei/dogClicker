import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ItemButton from './ItemButton';
import FadeIn from './common/FadeIn';

const Shop = ({ fbp, onClick, items, format }) => (
  <div style={styles.container}>
    <h3>Shop</h3>
    <FadeIn>
      {Object.values(items).map(item => {
        const show = item.show ? items[item.show].count > 0 : true;
        const showMultiple = fbp >= item.price + item.price * item.benefit;
        return (
          show && (
            <ItemButton
              key={item.name}
              disabled={fbp <= item.price - 1}
              item={item}
              onClick={onClick}
              showMultiple={showMultiple}
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
    alignItems: 'center'
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
