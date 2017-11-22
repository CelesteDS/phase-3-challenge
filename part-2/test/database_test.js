const expect = require('chai').expect;

const { productList, shopperOrders, realShoppers } = require('../database');

describe('productList()', () => {
  it('should return a list of the product in the given section', () =>
    productList('fruit').then(results =>
      expect(results[0].name).to.equal('orange')),
  );
});

describe('shopperOrders()', () => {
  it('should list the orders with totals', () => {
    // place holder failing test until I get shopperOrders returning properly
    shopperOrders(2).then((results) => {
      console.log('results are' + results);
    });
  });
});

describe('realShoppers()', () => {
  it('should contain shoppers that have at least one order', () => {
    realShoppers().then(results =>
      expect(results[1].name).to.equal('Dorothy'));
  });
});
