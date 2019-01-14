const formatNumber = (number, decimals) => {
  return number
    .toFixed(decimals)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export default formatNumber;
