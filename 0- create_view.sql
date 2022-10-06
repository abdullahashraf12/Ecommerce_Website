// old one
create or replace view v_prod as select product_name,rating,count(rating) cnt from product_details_client_review group by product_name,rating
// new one
create or replace view v_prod as 
select category_name,child_category,product_name,rating,count(rating) cnt from product_details_client_review group by category_name,child_category,product_name,rating