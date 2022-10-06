CREATE OR REPLACE TRIGGER RATE_PROD
INSTEAD OF  INSERT OR UPDATE OR DELETE 
ON V_PROD
for each row
declare
 c_count   number;
w_rating   number;
begin
    ---------------------
if inserting or updating then 
   select CNT into c_count   
   from v_prod I
   where I.product_name =:new.product_name
   and    I.category_name=:new.category_name
  and   I.child_category  =:new.child_category
  and I.cnt IN
(select MAX(O.CNT) FROM  V_PROD O
WHERE O.product_name=I.product_name
 and      O.category_name=I.category_name
 and      O.child_category =I.child_category 
 );     
      if nvl(c_count,0)=1 then
          --
          select I.rating into w_rating 
          from v_prod I
          where I.product_name  =:new.product_name
           and    I.category_name =:new.category_name
            and   I.child_category  =:new.child_category
            and   I.cnt IN
              (select MAX(O.CNT) FROM  V_PROD O
              WHERE O.product_name  =I.product_name
                  and    O.CATEGORY_NAME =I.CATEGORY_NAME
                  and    O.child_category =I.child_category
                  );
           --
              update products_products 
               set number_of_review=w_rating
                    where product_name   = :new.product_name
                      and   child_category  = :new.child_category
                      and   CATEGORY_NAME_ID  = :new.CATEGORY_NAME;
              
           --
      end if;

end if;
	---------------------

if deleting then 
   select CNT into c_count   
   from v_prod I
   where I.product_name =:old.product_name
   and    I.category_name=:old.category_name
  and   I.child_category  =:old.child_category
  and I.cnt IN
(select MAX(O.CNT) FROM  V_PROD O
WHERE O.product_name=I.product_name
 and      O.category_name=I.category_name
 and      O.child_category =I.child_category 
 );  
    if nvl(c_count,0)=1 then
          --
          select I.rating into w_rating 
          from v_prod I
          where I.product_name  =:old.product_name
           and    I.category_name =:old.category_name
            and   I.child_category  =:old.child_category
            and   I.cnt IN
              (select MAX(O.CNT) FROM  V_PROD O
              WHERE O.product_name  =I.product_name
                  and    O.category_name=I.category_name
                  and    O.child_category =I.child_category
                  );
           --
              update products_products 
               set Number_of_review=w_rating
                    where product_name   = :old.product_name
                      and   child_category  = :old.child_category
                      and   CATEGORY_NAME_ID = :old.CATEGORY_NAME;
                
           --
      end if;  
end if;

	---------------------
end RATE_PROD;
/
