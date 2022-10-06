// old one
create or replace view v_prod as select product_name,rating,count(rating) cnt from product_details_client_review group by product_name,rating
// new one
create or replace view v_prod as 
select category_name,child_category,product_name,rating,count(rating) cnt from product_details_client_review group by category_name,child_category,product_name,rating






create or replace view v_prod_all as 
select i.category_name,i.child_category,i.product_name,i.rating,count(i.rating) cnt ,
round 
((count(i.rating)/
( select count(o.rating) from product_details_client_review o
 where o.category_name=i.category_name
  and  o.child_category=i.child_category
 and  o.product_name= i.product_name))*100 ) perc 
from product_details_client_review i
group by i.category_name,i.child_category,i.product_name,i.rating
order by i.category_name,i.child_category,i.product_name,i.rating