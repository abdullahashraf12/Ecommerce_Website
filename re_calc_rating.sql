CREATE OR REPLACE PROCEDURE RE_Calc_Rating
   IS
   cursor v_prod_all_cur IS 
      select i.CATEGORY_NAME,i.CHILD_CATEGORY,i.PRODUCT_NAME,i.rating
      from v_prod_all i 
      where i.perc in
      (select max(o.perc) from v_prod_all o
      where o.CATEGORY_NAME=i.CATEGORY_NAME
      and o.CHILD_CATEGORY=i.CHILD_CATEGORY
      and o.PRODUCT_NAME=i.PRODUCT_NAME);
   
   
   --==============================================================================
BEGIN

FOR  J  IN v_prod_all_cur LOOP   
EXIT WHEN v_prod_all_cur%NOTFOUND;
UPDATE PRODUCTS_PRODUCTS SET NUMBER_OF_REVIEW=J.rating
where CATEGORY_NAME_ID=J.CATEGORY_NAME AND CHILD_CATEGORY=J.CHILD_CATEGORY AND PRODUCT_NAME=J.PRODUCT_NAME;
COMMIT;
END LOOP;

--=======================================
END RE_Calc_Rating;

/
