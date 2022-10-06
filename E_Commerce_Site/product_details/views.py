import http
from http.client import HTTPResponse
from itertools import product
from pkgutil import get_data
from unicodedata import category
from django.shortcuts import render
from products.models import Products
from global_category_home.models import global_category
from django.http import JsonResponse
from django.core import serializers
import json
import requests
from bs4 import BeautifulSoup
from .models import client_review
from django.views.decorators.clickjacking import xframe_options_exempt
from accounts.models import Accounts
from django.views.decorators.csrf import csrf_exempt
from contact.models import Contact_Us,Company_Details

# Create your views here.
class Product_Detail:



    def __init__(self,cont={}):
        self._cont = cont

    def set_data(self, cont):
        self._cont = cont
    def get_data(self):
        return self._cont

    @xframe_options_exempt
    def rating(self,request):
        return render(request,"rating.html")



    def show_quantity_for_this_product(self,request):
        if request.method== "POST":
            cat_name=request.POST.get("cat_name")
            child_name=request.POST.get("child_name")
            prod_name=request.POST.get("prod_name")
            print(cat_name)
            print(child_name)
            print(prod_name)

            data=dict(self.get_data()).get("data")
            data=Products.objects.filter(category_name=cat_name,child_category=child_name,product_name=prod_name).values("Quantity")
            return JsonResponse({"q_prod":list(data)})



    def set_review(self,request):
            cat_name=request.POST.get("cat_name")
            child_name=request.POST.get("child_name")
            prod_name=request.POST.get("prod_name")
            my_acc = request.session.get('Account')
            F_Name = request.session.get('F_Name')
            rating = request.POST.get('rating_input')
            client_message = request.POST.get('client_message')
            print("1")
            account_img=Accounts.objects.filter(Account=my_acc).values("profile_image")
            print("2")
            if(rating==""):
                rating="0"
            
            client_rev=client_review(
                account=my_acc,
                account_image=account_img,
                f_name=F_Name,
                client_message=client_message,
                rating=rating,
                category_name=cat_name,
                child_category=child_name,
                product_name=prod_name
                )

            print("3")
            try:
                client_rev.save()
                return JsonResponse({"success":list({"success":"success"})})
            except:
                return JsonResponse({"failed":list({"failed":"failed"})})

    @csrf_exempt
    def get_review(self,request):
            category_name_global=request.POST.get("category_name_global")
            child_name_global=request.POST.get("child_name_global")
            prod_name_global=request.POST.get("prod_name_global")
            data=client_review.objects.filter(category_name=category_name_global,child_category=child_name_global,product_name=prod_name_global).values().order_by('-date')[:5]
            return JsonResponse({"date":list(data)})

    def home_details_oroduct_page(self,request):
        categories_list=global_category.objects.all()
        comp_details=Company_Details.objects.values("Address","E_Mail","Company_Number")

        cat_list=list(categories_list.values("category"))
        list_just_names=[]

        for cat_name in cat_list:
            # print(cat_name)
            list_just_names.append(cat_name.get("category"))

       
        if(request.method=="POST" and ("view_product_name" in request.POST) and ("view_product_category" in request.POST) ):
            print("I am Here 1")

                
            view_product_name=request.POST.get("view_product_name")
            view_product_category=request.POST.get("view_product_category")
            view_child_category=request.POST.get("view_child_category")
            
            prod_get=Products.objects.filter(product_name=view_product_name,child_category=view_child_category,category_name=view_product_category)
            my_acc = request.session.get('Account')
            F_Name = request.session.get('F_Name')
            L_Name = request.session.get('L_Name')
            profile_image = request.session.get('p_img')

            #  del request.session['prod_get']

            context={"data":prod_get,"account":my_acc,"F_Name":F_Name,"L_Name":L_Name,"profile_image":profile_image,"categories":list_just_names,"cmp_det" : comp_details}

            self.set_data(context)

            











            return render(request,"detail.html",context)
        elif(request.method=="POST" and ("view_product_category_2" in request.POST) and ("view_child_category_2" in request.POST) and ("view_product_name_2" in request.POST) ):
            
            view_product_category=request.POST.get("view_product_category_2")
            view_child_category=request.POST.get("view_child_category_2")
            view_product_name=request.POST.get("view_product_name_2")
            print(view_product_category)
            print(view_child_category)
            print(view_product_name)

            prod_get=Products.objects.filter(category_name=view_product_category,child_category=view_child_category,product_name=view_product_name)
            my_acc = request.session.get('Account')
            F_Name = request.session.get('F_Name')
            L_Name = request.session.get('L_Name')
            profile_image = request.session.get('p_img')

            #  del request.session['prod_get']
            print("I am Here 2")
            context={"data":prod_get,"account":my_acc,"F_Name":F_Name,"L_Name":L_Name,"profile_image":profile_image,"categories":list_just_names,"cmp_det" : comp_details}
            self.set_data(context)
            return render(request,"detail.html",context)
            
        else:
            return render(request,"detail.html",self.get_data())
        