const pg = require('pg-promise')(); // default options = ();

let connectionString = `postgres://${process.env.USER}:@localhost:5432/grocery_store`;
connectionString += process.env.NODE_ENV === 'test' ? '_test' : '';
const db = pg(connectionString);

/**
 * Gets a list of all the products in the db in given section.
 * @param  {string} section the section to list the items from
 * @return {promise} - resolves to array of objects with keys name and section
 */
function productList(section) {
  return db.any(`SELECT name, section
    FROM products
    WHERE section = $1`, section);
}
/**
 * [shopperOrders description]
 * @param  {[type]} shopperId [description]
 * @return {Promise} - resolves to array of objects with keys order_id and sum
 */
function shopperOrders(shopperId) {
  db.any(`
      SELECT id
      FROM orders
      WHERE shopper_id = $1`, shopperId)
    .then((ids) => {
      console.log(ids);
      const arr = [];
      ids.forEach((obj) => {
        console.log('obj id is ' + obj.id);
        arr.push(db.any(`SELECT order_id, SUM(price)
          FROM orders_products
          JOIN products ON products.id = product_id
          WHERE order_id = $1
          GROUP BY order_id`, obj.id));
      })
      return Promise.all(arr);
    })

}

/**
 * Gets a list of the shoppers that have at least one order and their number of orders.
 * @return {promise} - resolves to array of objects with keys name and count
 */
function realShoppers() {
  return db.any(`
    SELECT shoppers.name, COUNT(shopper_id)
    FROM orders
    JOIN shoppers ON shoppers.id = shopper_id
    GROUP BY shoppers.name`);
}

module.exports = { productList, shopperOrders, realShoppers };
