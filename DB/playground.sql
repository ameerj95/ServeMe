-- alter table order_table
-- modify COLUMN date varchar(60)

-- use servemedb;
-- INSERT INTO order_item(order_id,menu_item_id)
--     VALUES (2,1)

-- SELECT *
--     FROM order_item
--     LEFT JOIN menu_items ON order_item.menu_item_id = menu_items.id
--     LEFT JOIN order_table ON order_item.order_id = order_table.id
--     where order_id = 3

-- DELETE from order_item
-- WHERE id=3

-- finds the order of a table of kitchen or bar
-- SELECT name,order_item.order_id,order_item.status FROM order_item
--     LEFT JOIN menu_items on menu_items.id = order_item.menu_item_id
--     LEFT JOIN order_table on order_table.id = order_item.order_id
--     WHERE order_id = 3 AND station = 1

-- find all active Orders
-- SELECT * from order_table
--     WHERE status!=3

-- SELECT name,order_item.id,order_item.order_id,order_item.status FROM order_item
--     LEFT JOIN menu_items on menu_items.id = order_item.menu_item_id
--     LEFT JOIN order_table on order_table.id = order_item.order_id
--     WHERE order_id = 2 AND station =1
-- UPDATE order_item 
--         SET status = 1
--         WHERE id=12;

-- SELECT name,order_item.id,order_item.order_id,order_item.status,order_table.table_num FROM order_item
--     LEFT JOIN menu_items on menu_items.id = order_item.menu_item_id
--     LEFT JOIN order_table on order_table.id = order_item.order_id
--     WHERE order_item.id = 2 

-- ALTER TABLE order_waiter
-- ADD item_id int;

-- SELECT * from order_waiter
--         WHERE status!=3 AND table_num=4
       

-- SELECT count(table_num) from qr_table

-- UPDATE order_item
--         SET status = 2
--         WHERE id=55;

select id,name from menu_items