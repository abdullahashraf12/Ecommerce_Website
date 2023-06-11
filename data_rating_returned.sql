select i.rating from v_prod_all i where i.perc in
(select max(o.perc) from v_prod_all o
where o.CATEGORY_NAME=i.CATEGORY_NAME
  and o.CHILD_CATEGORY=i.CHILD_CATEGORY
  and o.PRODUCT_NAME=i.PRODUCT_NAME);