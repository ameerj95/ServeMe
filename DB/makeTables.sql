-- MenuItem
use servemeDB;

-- CREATE TABLE menu_items(
--     id int AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(20),
--     price INT,
--     description VARCHAR(120),
--     img VARCHAR(60),
--     category INT ,
--     is_vegan boolean,
--     is_gluten_free boolean,
--     station INT
-- );

-- CREATE TABLE qr_table(
--     table_num int PRIMARY KEY,
--     name VARCHAR(60)
-- );

-- DROP TABLE qr_table;

-- CREATE TABLE info_resturant(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(20),
--     email VARCHAR(20),
--     location VARCHAR(20),
--     work_hours VARCHAR(60),
--     logo VARCHAR(60),
--     img VARCHAR(60),
--     menu INT
-- );

-- CREATE TABLE order(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     menu_item_id INT,

--     FOREIGN KEY(menu_item_id) REFERENCES menu_items(id)
-- )

-- CREATE TABLE order_item(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     menu_item_id INT,

--     FOREIGN KEY(menu_item_id) REFERENCES menu_items(id)
-- );


-- CREATE TABLE order_table(
--     id int AUTO_INCREMENT PRIMARY KEY,
--     date DATE,
--     table_id INT,
--     FOREIGN KEY(table_id) REFERENCES qr_table(table_num)


-- );

