-- MenuItem
use servemedb;

-- CREATE TABLE info_resturant(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     phonenumber VARCHAR(20),
--     name VARCHAR(20),
--     email VARCHAR(20),
--     location VARCHAR(20),
--     work_hours VARCHAR(60),
--     logo VARCHAR(60),
--     img VARCHAR(60)
-- -- );

-- CREATE TABLE menu_items(
--     id int AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(20),
--     price INT,
--     description VARCHAR(120),
--     img VARCHAR(120),
--     category INT ,
--     is_vegan boolean,
--     is_gluten_free boolean,
--     station INT
-- );

-- CREATE TABLE qr_table(
--     table_num int PRIMARY KEY,
--     qr_code VARCHAR(120)
    
-- );

-- CREATE TABLE order_table(
--     id int AUTO_INCREMENT PRIMARY KEY,
--     date varchar(120),
--     table_num INT,
--     status INT,
--     FOREIGN KEY(table_num) REFERENCES qr_table(table_num)
-- );

-- CREATE TABLE order_item(
--     id INT AUTO_INCREMENT PRIMARY KEY,
--     order_id INT,
--     menu_item_id INT,
--     status INT,
--     FOREIGN KEY(order_id) REFERENCES order_table(id),
--     FOREIGN KEY(menu_item_id) REFERENCES menu_items(id)
-- );

-- CREATE TABLE order_waiter(
--     id int AUTO_INCREMENT PRIMARY KEY,
--     table_num int,
--     order_id INT,
--     order_type INT,
--     date varchar(60),
--     status INT,
--     FOREIGN KEY(order_id) REFERENCES order_table(id)
-- );



