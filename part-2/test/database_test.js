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
    shopperOrders(3).then((results) => {
      expect(results[1].order_id).to.equal(3);
    });
  });
});

describe('realShoppers()', () => {
  it('should contain just 2 shoppers', () => {
    realShoppers().then(results =>
      expect(results.length).to.equal(2));
  });
});
