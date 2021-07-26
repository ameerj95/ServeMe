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

DELETE from order_item
WHERE id=3