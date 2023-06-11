select I.rating from v_prod I
where I.product_name='Hoodie'
and I.cnt IN
(select MAX(O.CNT) FROM  V_PROD O
WHERE O.product_name=I.product_name);