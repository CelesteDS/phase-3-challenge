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
 * Gets all the orders and their totals for a given shopper
 * @param  {number} shopperId id of shopper
 * @return {promise} - resolves to array of objects with keys order_id and sum
 */
function shopperOrders(shopperId) {
  return db.any(`SELECT order_id, SUM(price)
          FROM orders_products
          JOIN products ON products.id = product_id
          WHERE order_id IN (SELECT id FROM orders WHERE shopper_id = $1)
          GROUP BY order_id`, shopperId);
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
