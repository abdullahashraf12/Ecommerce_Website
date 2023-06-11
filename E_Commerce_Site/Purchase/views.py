from django.http import HttpResponse
from django.shortcuts import render
from matplotlib.style import context
from .models import Purchased
from accounts.models import Accounts
from products.models import Products
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.clickjacking import xframe_options_exempt
from django.http import JsonResponse

# Create your views here.
class http_res:
    def __init__(self,http_response=None):
        self._http_response=http_response
    def set_http_response(self,http_response):
        self._http_response=http_response
    def get_http_response(self):
        return self._http_response


    @xframe_options_exempt
    def add_to_cart(self,request):
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
        products=Products.objects.filter(category_name=glob_cat,child_category=child_name,product_name=prod_name).values("main_img","price","category_name","currency")
        prod_img=""
        price=""
        glob_cat=""
        currency=""
        print("glob_cat"+str(glob_cat))
        for i in list(products):
            prod_img=dict(i).get("main_img")
            price=dict(i).get("price")
            glob_cat=dict(i).get("category_name")
            currency=dict(i).get("currency")

        for i in list(account_details):
            acc=dict(i).get("Account")
            f_n=dict(i).get("F_Name")
            l_n=dict(i).get("L_Name")
        card_data_exist=Purchased.objects.filter(account=acc,global_category=glob_cat,sub_category=child_name,product_name=prod_name).values()
        # .update(product_color=color,product_size=size,product_quantity=quantity,product_price=price)
        if(list(card_data_exist)==[]):
            card_data=Purchased(account=acc,global_category=glob_cat,sub_category=child_name,product_name=prod_name,product_color=color,product_size=size,product_quantity=quantity,product_price=price,currency=currency,user_first_name=f_n,user_second_name=l_n,prod_image=prod_img)
            print(currency)
            card_data.save()
        else:
            card_data_exist=Purchased.objects.filter(account=acc,global_category=glob_cat,sub_category=child_name,product_name=prod_name).update(product_color=color,product_size=size,product_quantity=quantity,product_price=price)

        card_data_list=Purchased.objects.filter(account=acc).order_by("-time_Added")
        print(card_data_list)
        context={"data":list(card_data_list.values()),"count":card_data_list.count()}
        http_Cart=render(request,"AddToCart.html",context)
        self.set_http_response(http_Cart)
        return render(request,"AddToCart.html",context)

    @csrf_exempt
    def get_shopping_Cart(self,request):
        acc=""
        try:
            acc=request.session['Account']
        except:
            print("acc is null")
        if(acc!=None or acc!=""):
            print(acc)
            card_data_list=Purchased.objects.filter(account=acc).order_by("-time_Added")
            context={"data":list(card_data_list.values()),"count":card_data_list.count()}
            return render(request,"AddToCart.html",context)
        else:
            return HttpResponse("")

    @xframe_options_exempt
    def remove_from_card(self,request):
        if(request.method=="POST"):
            glob_cat=request.POST.get("glob_cat")
            child_cat=request.POST.get("child_cat")
            prod_cat=request.POST.get("prod_Cat")
            acc=request.session['Account']
            instance_purchased=Purchased.objects.filter(global_category=glob_cat,sub_category=child_cat,product_name=prod_cat,account=acc)
            instance_purchased.delete()
            return JsonResponse({"success":"success"},safe=False)