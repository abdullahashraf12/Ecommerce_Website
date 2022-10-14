from django.shortcuts import render
from matplotlib.style import context
from .models import Purchased
from accounts.models import Accounts
from products.models import Products
# Create your views here.
def add_to_cart(request):
    account=request.POST.get("account")
    glob_cat=request.POST.get("cat_name")
    child_name=request.POST.get("child_name")
    prod_name=request.POST.get("prod_name")
    size=request.POST.get("size")
    color=request.POST.get("color")
    quantity=request.POST.get("quantity")
    account_details=Accounts.objects.filter(Account=account).values("F_Name","L_Name","Account")
    acc=""
    f_n=""
    l_n=""
    products=Products.objects.filter(category_name=glob_cat,child_category=child_name,product_name=prod_name).values("img","price","category_name")
    prod_img=""
    price=""
    glob_cat=""
    print("glob_cat"+str(glob_cat))
    for i in list(products):
        prod_img=dict(i).get("img")
        price=dict(i).get("price")
        glob_cat=dict(i).get("category_name")

    for i in list(account_details):
        acc=dict(i).get("Account")
        f_n=dict(i).get("F_Name")
        l_n=dict(i).get("L_Name")

    card_data=Purchased(account=acc,global_category=glob_cat,sub_category=child_name,product_name=prod_name,product_color=color,product_size=size,product_quantity=quantity,product_price=price,user_first_name=f_n,user_second_name=l_n,prod_image=prod_img)
    card_data.save()
    card_data_list=Purchased.objects.filter(account=acc)
    context={"data":list(card_data_list.values()),"count":card_data_list.count()}

    return render(request,"AddToCart.html",context)
   