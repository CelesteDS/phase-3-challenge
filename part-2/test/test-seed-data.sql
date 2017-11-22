
INSERT INTO shoppers (name) VALUES ('Katherine');
INSERT INTO shoppers (name) VALUES ('Mary');
INSERT INTO shoppers (name) VALUES ('Dorothy');

INSERT INTO orders (shopper_id) VALUES (1);
INSERT INTO orders (shopper_id) VALUES (3);
INSERT INTO orders (shopper_id) VALUES (3);

INSERT INTO products (name, price, section) VALUES ('carrot', 1.12, 'vegetable');
INSERT INTO products (name, price, section) VALUES ('onion', 1.59, 'vegetable');
INSERT INTO products (name, price, section) VALUES ('orange', 2.99, 'fruit');

INSERT INTO orders_products (order_id, product_id) VALUES (1, 1);
INSERT INTO orders_products (order_id, product_id) VALUES (2, 1);
INSERT INTO orders_products (order_id, product_id) VALUES (2, 3);
INSERT INTO orders_products (order_id, product_id) VALUES (3, 2);
