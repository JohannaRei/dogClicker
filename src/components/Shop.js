import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ItemButton from './ItemButton';

const Shop = ({ fbp, onClick, items, format }) => (
  <div>
    <h3>Shop</h3>
    {Object.values(items).map(item => {
      const show = item.show ? items[item.show].count > 0 : true;
      const showMultiple = fbp >= item.price + item.price * item.benefit;
      return (
        <ItemButton
          key={item.name}
          disabled={fbp <= item.price - 1}
          visible={show}
          item={item}
          onClick={onClick}
          showMultiple={showMultiple}
        />
      );
    })}
  </div>
);

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
