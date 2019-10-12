DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Echo Dot", "Technology", 39.99, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("40in TV", "TV", 329, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("XBOX One X", "Gaming", 499.99, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("3pk T-Shirts", "Clothing", 5, 200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wilson Football", "Toys", 40, 75);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("2019 Macbook Pro", "Computer", 1200, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Water Hose", "Outdoor", 15, 80);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("iPhone XS Max Case", "Technology", 25, 150);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dining Table", "Furniture", 299, 17);