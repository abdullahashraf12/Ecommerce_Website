update products_products i set Number_of_review=
(select cnt from v_prod o
 where o.product_name   = i.product_name
 and   o.child_category = i.child_category
 and   o.category_name  = i.category_name
 )
 