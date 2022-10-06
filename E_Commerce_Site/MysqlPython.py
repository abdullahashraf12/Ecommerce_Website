import mysql.connector

class CursorByName():

    def __init__(self, cursor):
        self._cursor = cursor
    
    def __iter__(self):
        return self

    def __next__(self):
        row = self._cursor.__next__()

        return { description[0]: row[col] for col, description in enumerate(self._cursor.description) }


# mydb =  mysql.connector.connect(
#   host="localhost",
#   user="abdo",
#   password="01123119835",
#   database="e-commerce_site"

# )

# my_product="MSI DS 502"
# mycursor = mydb.cursor()
# mycursor.execute("SELECT SUM(CNT) FROM V_PROD WHERE product_name='{}'".format(my_product))

# # 1- Essential- Total_Review
# for row in CursorByName(mycursor):
#     print("Total Review "+str(row["SUM(CNT)"]))


# #  2-Rating_Indictor
# mycursor.execute("select counT(*) from v_prod I where I.product_name='{}' and I.cnt IN (select MAX(O.CNT) FROM  V_PROD O WHERE O.product_name=I.product_name);".format(my_product))

# for row in CursorByName(mycursor):
#     print("Indictor Must Be : 1 = "+str(row["counT(*)"]))
#     if(str(row["counT(*)"])=="1"):
#         #  Get Rating ( "3-   rating"  )
#         mycursor.execute("select I.rating from v_prod I where I.product_name='{}' and I.cnt IN (select MAX(O.CNT) FROM  V_PROD O WHERE O.product_name=I.product_name);".format(my_product))
#         for row in CursorByName(mycursor):
#             print("rating => "+str(row["rating"]))