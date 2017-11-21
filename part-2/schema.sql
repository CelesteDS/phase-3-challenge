DROP TABLE IF EXISTS shoppers, orders, sections, products, orders_products;

CREATE TABLE shoppers (
  id SERIAL PRIMARY KEY,
  name VARCHAR(80) NOT NULL
);

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  shopper_id INTEGER REFERENCES shoppers(id)
);

CREATE TABLE sections (
  id SERIAL PRIMARY KEY,
  title VARCHAR(60)
);

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(80),
  price FLOAT ,
  section INTEGER REFERENCES sections(id)
);

CREATE TABLE orders_products (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id),
  product_id INTEGER REFERENCES products(id)
);
