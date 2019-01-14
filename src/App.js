import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shop from './components/Shop';
import { bindActionCreators } from 'redux';
import * as itemActions from './actions/itemActions';

class App extends Component {
  componentDidMount() {
    if (this.props.autofeed) {
      this.startAutofeed();
    }
  }

  startAutofeed = () => {
    setInterval(this.feed, 1000);
  };

  feed = () => {
    this.props.itemActions.updateFbp(this.props.feedAmount);
  };

  buyAll = item => {
    let price = item.price;
    let available = this.props.fbp;
    let idx = 0;
    while (available >= price && idx < 10) {
      this.props.itemActions.buyItems(item);
      available = available - price;
      price = price * item.benefit;
      console.log(available);
      console.log(price);
    }
    console.log(item);
  };

  buyItems = (item, amount) => {
    const { buyItems, startAutofeed } = this.props.itemActions;
    if (amount === 'all') {
      this.buyAll(item);
    } else {
      buyItems(item);
    }

    if (!this.props.autofeed) {
      startAutofeed();
      this.startAutofeed();
    }
  };

  render() {
    const { fbp, feedAmount } = this.props;
    return (
      <div>
        <p>{fbp.toFixed(0)}</p>
        <button onClick={this.feed}>Feed</button>
        <p>{feedAmount.toFixed(2)} per second/click</p>
        <Shop onClick={this.buyItems} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { items, fbp, feedAmount, autofeed } = state.items;
  return {
    items,
    fbp,
    feedAmount,
    autofeed
  };
};

const mapDispatchToProps = dispatch => ({
  itemActions: bindActionCreators(itemActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
