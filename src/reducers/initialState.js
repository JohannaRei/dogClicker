export default {
  fbp: 0,
  items: {
    kibble: {
      name: 'kibble',
      price: 100,
      benefit: 1.01,
      start: 2,
      count: 0
    },
    treat: {
      name: 'treat',
      price: 1000,
      benefit: 1.05,
      start: 5,
      count: 0,
      show: 'kibble'
    },
    bone: {
      name: 'bone',
      price: 10000,
      benefit: 1.1,
      start: 10,
      count: 0,
      show: 'treat'
    },
    ham: {
      name: 'ham',
      price: 100000,
      benefit: 1.15,
      start: 20,
      count: 0,
      show: 'bone'
    },
    steak: {
      name: 'steak',
      price: 1000000,
      benefit: 1.2,
      start: 100,
      count: 0,
      show: 'ham'
    }
  },
  feedAmount: 1,
  autofeed: false
};
