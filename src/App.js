import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shop from './components/Shop';
import { bindActionCreators } from 'redux';
import * as itemActions from './actions/itemActions';

class App extends Component {
  state = {
    fbp: 0,
    fps: 0
  };

  componentDidMount() {
    if (this.props.autofeed) {
      this.startAutofeed();
      this.getFPS();
    }
    this.setState({ fpb: this.props.fbp });
  }

  startAutofeed = () => {
    setInterval(this.feed, 1000);
  };

  feed = () => {
    this.props.itemActions.updateFbp(this.props.feedAmount);
  };

  buyAll = async item => {
    let price = item.price;
    let available = this.props.fbp;
    let idx = 0;
    while (available >= price && idx < 10) {
      await this.props.itemActions.buyItems(item);
      available = available - price;
      price = price * item.benefit;
    }
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
      this.getFPS();
    }
  };

  getFPS = () => {
    setInterval(() => {
      const fps = (this.props.fbp - this.state.fbp) / 3;
      this.setState({ fbp: this.props.fbp, fps });
    }, 3000);
  };

  render() {
    const { fbp, feedAmount } = this.props;
    const fps = this.state.fps > feedAmount ? this.state.fps : feedAmount;
    return (
      <div>
        <p>{fbp.toFixed(0)}</p>
        <button onClick={this.feed}>Feed</button>
        <p>{feedAmount.toFixed(2)} per feeding</p>
        <p>{fps.toFixed(2)} FPS</p>
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
