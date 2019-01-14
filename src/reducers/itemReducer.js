import initialState from './initialState';
import {
  BUY_ITEMS,
  UPDATE_FBP,
  UPDATE_AMOUNT,
  START_AUTOFEED
} from '../actions/actionTypes';

export default function item(state = initialState, action) {
  switch (action.type) {
    case BUY_ITEMS:
      const current = state.items[action.item.name];
      let extra = 0;
      if (current.count === 0) {
        extra = current.start;
      }
      return {
        ...state,
        items: {
          ...state.items,
          [action.item.name]: {
            ...current,
            count: current.count + 1,
            price: current.price * current.benefit
          }
        },
        fbp: state.fbp - current.price,
        feedAmount: state.feedAmount + extra
      };
    case UPDATE_FBP:
      return { ...state, fbp: state.fbp + action.fbp };
    case UPDATE_AMOUNT:
      return { ...state, feedAmount: state.feedAmount * action.amount };
    case START_AUTOFEED:
      return { ...state, autofeed: !state.autofeed };
    default:
      return state;
  }
}
