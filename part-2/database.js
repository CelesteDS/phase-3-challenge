function product-list(section) {
  return db.any(`SELECT name, section 
    FROM products
    WHERE section = $1`, section);
}
