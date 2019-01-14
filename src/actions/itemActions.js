import * as types from './actionTypes';

export function buyItems(item) {
  return { type: types.BUY_ITEMS, item };
}

export function updateFbp(fbp) {
  return { type: types.UPDATE_FBP, fbp };
}

export function updateAmount(amount) {
  return { type: types.UPDATE_AMOUNT, amount };
}

export function startAutofeed() {
  return { type: types.START_AUTOFEED };
}
