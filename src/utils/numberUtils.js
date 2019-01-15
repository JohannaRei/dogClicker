const format = (number, decimals) => {
  return number
    .toFixed(decimals)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const priceOfMultiple = (price, amount) => {
  let finalPrice = price;
  for (let i = 1; i < amount; i++) {
    const added = price * (1.3 * i);
    finalPrice += added;
  }
  return finalPrice;
};

export { format, priceOfMultiple };
