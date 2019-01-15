import React, { Component } from 'react';
import { connect } from 'react-redux';
import Shop from './components/Shop';
import { bindActionCreators } from 'redux';
import * as itemActions from './actions/itemActions';
import SpecialItem from './components/SpecialItem';
import FbpContainer from './components/FbpContainer';
import Column from './components/common/Column';

class App extends Component {
  state = {
    fbp: 0,
    fps: 0,
    showSpecial: false
  };

  componentDidMount() {
    if (this.props.autofeed) {
      this.startAutofeed();
    }
    this.startFPS();
    this.startSpecial();
    this.setState({ fpb: this.props.fbp });
  }

  showSpecial = () => {
    this.setState({ showSpecial: true });
    setTimeout(() => {
      this.setState({ showSpecial: false });
    }, 5000);
  };

  startSpecial = () => {
    setInterval(() => {
      const lucky = Math.random() > 0.2;
      if (lucky) {
        this.showSpecial();
      }
    }, 10000);
  };

  startAutofeed = () => {
    setInterval(this.feed, 1000);
  };

  feed = amount => {
    const feedAmount =
      typeof amount === 'number' ? amount : this.props.feedAmount;
    this.props.itemActions.updateFbp(feedAmount);
  };

  buyMultiple = async (item, amount) => {
    console.log(amount);
    let price = item.price;
    let available = this.props.fbp;
    let idx = 0;
    while (available >= price) {
      let count = amount ? idx < amount : true;
      if (count) {
        await this.props.itemActions.buyItems(item);
      }
      available = available - price;
      price = price * 1.3;
      idx++;
    }
  };

  buyItems = (item, amount) => {
    const { buyItems, startAutofeed } = this.props.itemActions;
    if (amount === 'max') {
      this.buyMultiple(item);
    } else if (amount) {
      this.buyMultiple(item, amount);
    } else {
      buyItems(item);
    }

    if (!this.props.autofeed) {
      startAutofeed();
      this.startAutofeed();
    }
  };

  startFPS = () => {
    setInterval(() => {
      const fps = (this.props.fbp - this.state.fbp) / 3;
      this.setState({ fbp: this.props.fbp, fps });
    }, 3000);
  };

  render() {
    const { feedAmount } = this.props;
    const fps = this.state.fps > feedAmount ? this.state.fps : feedAmount;
    return (
      <div style={styles.container}>
        <Column>
          <FbpContainer feed={this.feed} fps={fps} {...this.props} />
          <Shop onClick={this.buyItems} />
        </Column>
        <Column>
          <SpecialItem
            onClick={() => this.feed(this.props.feedAmount * 100)}
            show={this.state.showSpecial}
          />
        </Column>
      </div>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
};

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
