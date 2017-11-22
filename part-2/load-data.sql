\COPY products (name, price, section) FROM './grocery.csv' CSV HEADER;

INSERT INTO shoppers (name) VALUES ('Alice');
INSERT INTO shoppers (name) VALUES ('Betty');
INSERT INTO shoppers (name) VALUES ('Carol');
INSERT INTO shoppers (name) VALUES ('Daisy');
INSERT INTO shoppers (name) VALUES ('Eleanor');

INSERT INTO orders (shopper_id) VALUES (1);
INSERT INTO orders (shopper_id) VALUES (2);
INSERT INTO orders (shopper_id) VALUES (3);
INSERT INTO orders (shopper_id) VALUES (5);
INSERT INTO orders (shopper_id) VALUES (5);

INSERT INTO orders_products (order_id, product_id) VALUES (1, 1);
INSERT INTO orders_products (order_id, product_id) VALUES (1, 2);
INSERT INTO orders_products (order_id, product_id) VALUES (3, 3);
INSERT INTO orders_products (order_id, product_id) VALUES (4, 1);
INSERT INTO orders_products (order_id, product_id) VALUES (4, 4);
INSERT INTO orders_products (order_id, product_id) VALUES (5, 2);
