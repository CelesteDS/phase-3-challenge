const pg = require('pg-promise')(); // default options = ();

let connectionString = `postgres://${process.env.USER}:@localhost:5432/photo_votes`;
connectionString += process.env.NODE_ENV === 'test' ? '_test' : '';
const db = pg(connectionString);

function productList(section) {
  return db.any(`SELECT name, section
    FROM products
    WHERE section = $1`, section);
}

function shopperOrders(shopperId) {
  db.task((t) => {
    return t.any(`
      SELECT id
      FROM orders
      WHERE shopper_id = $1`, shopperId)
      .then(ids =>
        ids.forEach(obj =>
          t.any(`SELECT order_id, SUM(price)
          FROM orders_products
          JOIN products ON products.id = product_id
          WHERE order_id = $1
          GROUP BY order_id`, obj.id))
      )
  }).then(
  ).catch(console.error);
}

module.exports = { productList, shopperOrders };
