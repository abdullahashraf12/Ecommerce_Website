from cgi import print_arguments
from itertools import product
from django.shortcuts import render
from zmq import PROTOCOL_ERROR_ZMTP_INVALID_SEQUENCE
from .models import Products
from global_category_home.models import global_category,discounts
# Create your views here.
from django.views.decorators.clickjacking import xframe_options_exempt
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from MysqlPython import CursorByName
import cx_Oracle
from django.core.serializers import serialize
from contact.models import Contact_Us,Company_Details
from django.views.decorators.clickjacking import xframe_options_exempt

context_={}


class Views_pages:
    def __init__(self, cont={},cat={},category_bar={},view_prod={}):
      self._cont = cont
      self._cat = cat
      self._category_bar = category_bar
      self._view_prod=view_prod


    def set_data_from_Search_bar(self, cont):
        self._cont = cont
    def get_data_from_Search_bar(self):
      return self._cont

    def set_data_from_Category_bar(self, cat):
        self._cat = cat
    def get_data_from_Category_bar(self):
      return self._cat

    def set_data_from_Category(self, category_bar):
        self._category_bar = category_bar
    def get_data_from_Category(self):
      return self._category_bar

    def set_view_product(self, view_prod):
        self._view_prod = view_prod
    def get_view_product(self):
      return self._view_prod

      
    @xframe_options_exempt
    def rating(self,request):
        return render(request,"rating.html")



    def home(self,request):

        return render(request,"shop.html")

    def all(self,request):
        print("this method called")
        if(request.method=="POST" and ("search_textfield" in request.POST) or ("Searching_for" in request.POST ) ):
            print("Iam Here 1")
            comp_details=Company_Details.objects.values("Address","E_Mail","Company_Number")

            data_from_search=request.POST.get("search_textfield")
            searching_for=request.POST.get("Searching_for")

            if(data_from_search!=None and searching_for==None):
                context_Data=Products.objects.filter(product_name__icontains=data_from_search)
                categories_list=global_category.objects.all()
                cat_list=list(categories_list.values("category"))
                list_just_names=[]
                for cat_name in cat_list:
                    # print(cat_name)
                    list_just_names.append(cat_name.get("category"))
                print(list_just_names)
                my_acc = request.session.get('Account')
                F_Name = request.session.get('F_Name')
                L_Name = request.session.get('L_Name')
                profile_image = request.session.get('p_img')
                context={"context":context_Data,"count":context_Data.count(),"categories":list_just_names,"account":my_acc,"F_Name":F_Name,"L_Name":L_Name,"profile_image":profile_image,"data_from_data_product_name":data_from_search,"product_count":context_Data.count(),"cmp_det" : comp_details}
                print(categories_list)
                
                self.set_data_from_Search_bar(context)
                self.set_data_from_Category_bar(None)
                self.set_data_from_Category(None)
                self.set_view_product(None)

                return render(request,"shop.html",context)
            else:
                comp_details=Company_Details.objects.values("Address","E_Mail","Company_Number")

                context_Data=Products.objects.filter(product_name__icontains=searching_for)
                categories_list=global_category.objects.all()
                cat_list=list(categories_list.values("category"))
                list_just_names=[]
                for cat_name in cat_list:
                    # print(cat_name)
                    list_just_names.append(cat_name.get("category"))
                print(list_just_names)
                my_acc = request.session.get('Account')
                F_Name = request.session.get('F_Name')
                L_Name = request.session.get('L_Name')
                profile_image = request.session.get('p_img')
                context={"context":context_Data,"count":context_Data.count(),"categories":list_just_names,"account":my_acc,"F_Name":F_Name,"L_Name":L_Name,"profile_image":profile_image,"data_from_data_product_name":searching_for,"product_count":context_Data.count(),"cmp_det" : comp_details}
                print(categories_list)
                self.set_data_from_Search_bar(context)
                self.set_data_from_Category_bar(None)
                self.set_data_from_Category(None)
                self.set_view_product(None)

                return render(request,"shop.html",context)

        elif(request.method=="POST" and ("categories_list" in request.POST)):
            comp_details=Company_Details.objects.values("Address","E_Mail","Company_Number")
            print("Iam Here 2")

            category_type=request.POST.get("categories_list")
            print(category_type)
            product_data=Products.objects.filter(category_name=category_type)
            categories_list=global_category.objects.all()
            cat_list=list(categories_list.values("category"))
            list_just_names=[]
            for cat_name in cat_list:
                list_just_names.append(cat_name.get("category"))
            print(category_type)
            # sub_categories_names=[]
            # for cat_name in cat_list:
            #     list_just_names.append(cat_name.get("child_category"))
            # print(sub_categories_names)
            my_acc = request.session.get('Account')
            F_Name = request.session.get('F_Name')
            L_Name = request.session.get('L_Name')
            profile_image = request.session.get('p_img') 
            context={"context":product_data,"count":product_data.count(),"account":my_acc,"F_Name":F_Name,"L_Name":L_Name,"profile_image":profile_image,"categories":list_just_names,"category_data":categories_list,"data_from_data_Category_name":category_type,"cmp_det" : comp_details}
            
            self.set_data_from_Category_bar(context)
            self.set_data_from_Search_bar(None)
            self.set_data_from_Category(None)
            self.set_view_product(None)





            return render(request,"shop.html",context)


            
        elif(request.method=="POST" and ("show_by_category" in request.POST) or "search_by_cate" in request.POST ):
            print("Iam Here 3")
            comp_details=Company_Details.objects.values("Address","E_Mail","Company_Number")

            category_type=request.POST.get("show_by_category")
            search_by_cate=request.POST.get("search_by_cate")

            if(category_type!=None and search_by_cate==None):

                product_data=Products.objects.filter(category_name=category_type)
                categories_list=global_category.objects.all()
                cat_list=list(categories_list.values("category"))
                list_just_names=[]
                for cat_name in cat_list:
                    list_just_names.append(cat_name.get("category"))
                my_acc = request.session.get('Account')
                F_Name = request.session.get('F_Name')
                L_Name = request.session.get('L_Name')
                profile_image = request.session.get('p_img') 
                context={"context":product_data,"count":product_data.count(),"account":my_acc,"F_Name":F_Name,"L_Name":L_Name,"profile_image":profile_image,"categories":list_just_names,"category_data":categories_list,"data_from_data_Category_name":category_type,"cmp_det" : comp_details}
                
                self.set_data_from_Category(context)
                self.set_data_from_Category_bar(None)
                self.set_data_from_Search_bar(None)                
                self.set_view_product(None)

                return render(request,"shop.html",context)
            else:

                product_data=Products.objects.filter(category_name=search_by_cate)
                print(category_type)
                categories_list=global_category.objects.all()
                cat_list=list(categories_list.values("category"))
                list_just_names=[]
                for cat_name in cat_list:
                    list_just_names.append(cat_name.get("category"))
                my_acc = request.session.get('Account')
                F_Name = request.session.get('F_Name')
                L_Name = request.session.get('L_Name')
                profile_image = request.session.get('p_img') 
                context={"context":product_data,"count":product_data.count(),"account":my_acc,"F_Name":F_Name,"L_Name":L_Name,"profile_image":profile_image,"categories":list_just_names,"category_data":categories_list,"data_from_data_product_name":search_by_cate,"cmp_det" : comp_details}
               
                self.set_data_from_Category(context)
                self.set_data_from_Category_bar(None)
                self.set_data_from_Search_bar(None)
                self.set_view_product(None)

                return render(request,"shop.html",context)

        elif(request.method=="POST" and ("view_product_name" in request.POST) and ("view_product_category" in request.POST)):
            print("Iam Here 4")
            comp_details=Company_Details.objects.values("Address","E_Mail","Company_Number")

            product_name_=request.POST.get("view_product_name")
            category_name_=request.POST.get("view_product_category")
            my_acc = request.session.get('Account')
            F_Name = request.session.get('F_Name')
            L_Name = request.session.get('L_Name')
            profile_image = request.session.get('p_img')
            details_=Products.objects.filter(category_name=category_name_,product_name=product_name_)
            
            context={"context":details_,"count":details_.count(),"account":my_acc,"F_Name":F_Name,"L_Name":L_Name,"profile_image":profile_image,"data_from_data_product_name":product_name_,"data_from_data_Category_name":category_name_,"product_count":details_.count(),"cmp_det" : comp_details}
            self.set_view_product(context)
            self.set_data_from_Category(None)
            self.set_data_from_Category_bar(None)
            self.set_data_from_Search_bar(None)
            self.set_data_from_Category(None)


            return render(request,"shop.html",context)
        elif(request.method=="GET"):
            if self.get_data_from_Category()!=None:
                print(str(dict(self.get_data_from_Category()).get("account"))+"1")
                return render(request,"shop.html",self.get_data_from_Category())
            elif(self.get_data_from_Category_bar()!=None):
                print(str(dict(self.get_data_from_Category_bar()).get("account"))+"2")
                return render(request,"shop.html",self.get_data_from_Category_bar())
            elif(self.get_data_from_Search_bar()!=None):
                return render(request,"shop.html",self.get_data_from_Search_bar())


    @csrf_exempt
    def show_sort(self,request):
        price_range=request.POST.get("get_filter_by_price")
        color=request.POST.get("get_filter_by_color")
        size=request.POST.get("get_filter_by_size")
        sorting_technique=request.POST.get("get_sorting_technique")
        get_number_of_showing=request.POST.get("get_number_of_showing")

        get_data_from_client_by_cate=request.POST.get("category_name_from_client")
        get_data_from_client_by_search=request.POST.get("p_name")
        # if(get_data_from_client_by_cate==""):
        # else:
        prices=""
        if(str(price_range).split("-")[0]=="All Prices"):
            prices=str(price_range).split("-")[0]
        elif(price_range==""):
            prices=""
        else:
            prices=str(price_range).split("-")[0]+" and "+str(price_range).split("-")[1]
        
        print("Prices is => "+prices)
        print("color =>  "+str(color))
        print("size =>  "+str(size))
        print("sorting_technique =>  "+str(sorting_technique))
        print("get_number_of_showing => "+str(get_number_of_showing))
        print("get_data_from_client_by_cate => "+str(get_data_from_client_by_cate))
        print("get_data_from_client_by_search => "+str(get_data_from_client_by_search))
        
        if(str(get_data_from_client_by_search) != ""):
            number_of_data_to_show=0
            prices_data_less_than=0
            prices_data_bigger_than=0
            color_data=0
            size_data=0
            sort_tech=""
            if(str(get_number_of_showing)==""):
                number_of_data_to_show=10
            else:
                number_of_data_to_show=int(str(get_number_of_showing))
            if(str(sorting_technique)==""):
                sort_tech="Latest"
            else:
                sort_tech=str(sorting_technique)



            print("Hello     ----- "+str(color))
            print("Hello     ----- "+str(price_range))
            if(sort_tech=="Latest"):

            #  Color & Size Both Are Null > Then Check Value of Price if it was true or false 
                if((str(color)=="" or str(color)=="All Color") and ( str(size) == "" or str(size) == "All Size")  ):
                    if((str(price_range) != "All Prices" and str(price_range) != "")):
                        prices_data_less_than=int(prices.split()[0].replace("$",""))
                        prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than).order_by("-time_Added")[:number_of_data_to_show].values())
                        print("price_range "+str(price_range))
                        print("color "+str(color))
                        print("size "+str(size))
                        return JsonResponse(my_product_,safe=False)
                    else:
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search)).order_by("-time_Added")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)    
                #  Color & Price Both Are Null > Then Check Value of Size if it was true or false 
                elif((str(color)=="" or str(color)=="All Color") and (str(price_range) == "All Prices" or str(price_range) == "")):
                    if((str(size) != "All Size" and str(size) != "")):
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),size_of_clothes__icontains=str(size)).order_by("-time_Added")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                    else:
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),size=0).order_by("-time_Added")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                #  Price & Size Both Are Null > Then Check Value of Color if it was true or false 
                elif((str(size)=="" or str(size)=="All Size") and (str(price_range) == "All Prices" or str(price_range) == "")):
                    if((str(color) != "All Color" and str(color) != "")):
                        color_list=[]
                        color_list.append(str(color))
                        print(color_list)
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),color__icontains=str(color)).order_by("-time_Added")[:number_of_data_to_show].values())
                        print(my_product_)
                        print(my_product_)
                        print(my_product_)
                        print(my_product_)
                        print(my_product_)
                        print(my_product_)
                        print(list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),color__icontains=str(color))))



                        return JsonResponse(my_product_,safe=False)
                    else:
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),color=0).order_by("-time_Added")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                elif((str(size)=="" or str(size)=="All Size") and (str(price_range) != "All Prices" or str(price_range) != "") and (str(color)!="" or str(color)!="All Color")):                    
                        prices_data_less_than=int(prices.split()[0].replace("$",""))
                        prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than,color__icontains=str(color)).order_by("-time_Added")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                #  Color & Size Both Are Null > Then Check Value of Price if it was true or false 
                if((str(color)=="" or str(color)=="All Color") and ( str(size) == "" or str(size) == "All Size") and (str(price_range) == "All Prices" or str(price_range) == "")  ):
                    prices_data_less_than=int(prices.split()[0].replace("$",""))
                    prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                    my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),color__icontains=str(color),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than,size_of_clothes__icontains=str(size)).order_by("-time_Added")[:number_of_data_to_show].values())
                    print("price_range "+str(price_range))
                    print("color "+str(color))
                    print("size "+str(size))
                    return JsonResponse(my_product_,safe=False)
                if((str(color)!="" or str(color)=="All Color") and ( str(size) != "" or str(size) != "All Size") and (str(price_range) == "All Prices" or str(price_range) == "")  ):                    
                    my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),color__icontains=str(color),size_of_clothes__icontains=str(size)).order_by("-time_Added")[:number_of_data_to_show].values())
                    print("price_range "+str(price_range))
                    print("color "+str(color))
                    print("size "+str(size))
                    return JsonResponse(my_product_,safe=False)
                if((str(color)=="" or str(color)=="All Color") and ( str(size) != "" or str(size) != "All Size") and (str(price_range) != "All Prices" or str(price_range) != "")  ):
                    prices_data_less_than=int(prices.split()[0].replace("$",""))
                    prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                    my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than,size_of_clothes__icontains=str(size)).order_by("-time_Added")[:number_of_data_to_show].values())
                    print(my_product_)
                    print("price_range "+str(price_range))
                    print("color "+str(color))
                    print("size "+str(size))
                    return JsonResponse(my_product_,safe=False)
                if((str(color)!="" or str(color)!="All Color") and ( str(size) != "" or str(size) != "All Size") and (str(price_range) != "All Prices" or str(price_range) != "")  ):
                    prices_data_less_than=int(prices.split()[0].replace("$",""))
                    prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                    my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than,color__icontains=str(color),size_of_clothes__icontains=str(size)).order_by("-time_Added")[:number_of_data_to_show].values())
                    print(my_product_)
                    print("price_range "+str(price_range))
                    print("color "+str(color))
                    print("size "+str(size))
                    return JsonResponse(my_product_,safe=False)








            elif(sort_tech=="Popularity"):


            #  Color & Size Both Are Null > Then Check Value of Price if it was true or false 
                if((str(color)=="" or str(color)=="All Color") and ( str(size) == "" or str(size) == "All Size")  ):
                    if((str(price_range) != "All Prices" and str(price_range) != "")):
                        prices_data_less_than=int(prices.split()[0].replace("$",""))
                        prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than,category_name="Featured Products")[:number_of_data_to_show].values())
                        print("price_range "+str(price_range))
                        print("color "+str(color))
                        print("size "+str(size))
                        return JsonResponse(my_product_,safe=False)
                    else:
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),category_name="Featured Products")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)    
                #  Color & Price Both Are Null > Then Check Value of Size if it was true or false 
                elif((str(color)=="" or str(color)=="All Color") and (str(price_range) == "All Prices" or str(price_range) == "")):
                    if((str(size) != "All Size" and str(size) != "")):
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),size_of_clothes__icontains=str(size),category_name="Featured Products")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                    else:
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),size=0,category_name="Featured Products")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                #  Price & Size Both Are Null > Then Check Value of Color if it was true or false 
                elif((str(size)=="" or str(size)=="All Size") and (str(price_range) == "All Prices" or str(price_range) == "")):
                    if((str(color) != "All Color" and str(color) != "")):
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),color__icontains=str(color),category_name="Featured Products")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                    else:
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),color=0,category_name="Featured Products")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                elif((str(size)=="" or str(size)=="All Size") and (str(price_range) != "All Prices" or str(price_range) != "") and (str(color)!="" or str(color)!="All Color")):                    
                        prices_data_less_than=int(prices.split()[0].replace("$",""))
                        prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than,color__icontains=str(color),category_name="Featured Products")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                #  Color & Size Both Are Null > Then Check Value of Price if it was true or false 
                if((str(color)=="" or str(color)=="All Color") and ( str(size) == "" or str(size) == "All Size") and (str(price_range) == "All Prices" or str(price_range) == "")  ):
                    prices_data_less_than=int(prices.split()[0].replace("$",""))
                    prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                    my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),color__icontains=str(color),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than,size_of_clothes__icontains=str(size),category_name="Featured Products")[:number_of_data_to_show].values())
                    print("price_range "+str(price_range))
                    print("color "+str(color))
                    print("size "+str(size))
                    return JsonResponse(my_product_,safe=False)
                if((str(color)!="" or str(color)=="All Color") and ( str(size) != "" or str(size) != "All Size") and (str(price_range) == "All Prices" or str(price_range) == "")  ):                    
                    my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),color__icontains=str(color),size_of_clothes__icontains=str(size),category_name="Featured Products")[:number_of_data_to_show].values())
                    print("price_range "+str(price_range))
                    print("color "+str(color))
                    print("size "+str(size))
                    return JsonResponse(my_product_,safe=False)
                if((str(color)=="" or str(color)=="All Color") and ( str(size) != "" or str(size) != "All Size") and (str(price_range) != "All Prices" or str(price_range) != "")  ):
                    prices_data_less_than=int(prices.split()[0].replace("$",""))
                    prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                    my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than,size_of_clothes__icontains=str(size),category_name="Featured Products")[:number_of_data_to_show].values())
                    print(my_product_)
                    print("price_range "+str(price_range))
                    print("color "+str(color))
                    print("size "+str(size))
                    return JsonResponse(my_product_,safe=False)
                if((str(color)!="" or str(color)!="All Color") and ( str(size) != "" or str(size) != "All Size") and (str(price_range) != "All Prices" or str(price_range) != "")  ):
                    prices_data_less_than=int(prices.split()[0].replace("$",""))
                    prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                    my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than,color__icontains=str(color),size_of_clothes__icontains=str(size),category_name="Featured Products")[:number_of_data_to_show].values())
                    print(my_product_)
                    print("price_range "+str(price_range))
                    print("color "+str(color))
                    print("size "+str(size))
                    return JsonResponse(my_product_,safe=False)






                
            elif(sort_tech=="Best Rating"):




                 #  Color & Size Both Are Null > Then Check Value of Price if it was true or false 
                if((str(color)=="" or str(color)=="All Color") and ( str(size) == "" or str(size) == "All Size")  ):
                    if((str(price_range) != "All Prices" and str(price_range) != "")):
                        prices_data_less_than=int(prices.split()[0].replace("$",""))
                        prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than).order_by("-Number_of_review")[:number_of_data_to_show].values())
                        print("price_range "+str(price_range))
                        print("color "+str(color))
                        print("size "+str(size))
                        return JsonResponse(my_product_,safe=False)
                    else:
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search)).order_by("-Number_of_review")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)    
                #  Color & Price Both Are Null > Then Check Value of Size if it was true or false 
                elif((str(color)=="" or str(color)=="All Color") and (str(price_range) == "All Prices" or str(price_range) == "")):
                    if((str(size) != "All Size" and str(size) != "")):
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),size_of_clothes__icontains=str(size)).order_by("-Number_of_review")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                    else:
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),size=0).order_by("-Number_of_review")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                #  Price & Size Both Are Null > Then Check Value of Color if it was true or false 
                elif((str(size)=="" or str(size)=="All Size") and (str(price_range) == "All Prices" or str(price_range) == "")):
                    if((str(color) != "All Color" and str(color) != "")):
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),color__icontains=str(color)).order_by("-Number_of_review")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                    else:
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),color=0).order_by("-Number_of_review")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                elif((str(size)=="" or str(size)=="All Size") and (str(price_range) != "All Prices" or str(price_range) != "") and (str(color)!="" or str(color)!="All Color")):                    
                        prices_data_less_than=int(prices.split()[0].replace("$",""))
                        prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                        my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than,color__icontains=str(color)).order_by("-Number_of_review")[:number_of_data_to_show].values())
                        return JsonResponse(my_product_,safe=False)
                #  Color & Size Both Are Null > Then Check Value of Price if it was true or false 
                if((str(color)=="" or str(color)=="All Color") and ( str(size) == "" or str(size) == "All Size") and (str(price_range) == "All Prices" or str(price_range) == "")  ):
                    prices_data_less_than=int(prices.split()[0].replace("$",""))
                    prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                    my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),color__icontains=str(color),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than,size_of_clothes__icontains=str(size)).order_by("-Number_of_review")[:number_of_data_to_show].values())
                    print("price_range "+str(price_range))
                    print("color "+str(color))
                    print("size "+str(size))
                    return JsonResponse(my_product_,safe=False)
                if((str(color)!="" or str(color)=="All Color") and ( str(size) != "" or str(size) != "All Size") and (str(price_range) == "All Prices" or str(price_range) == "")  ):                    
                    my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),color__icontains=str(color),size_of_clothes__icontains=str(size)).order_by("-Number_of_review")[:number_of_data_to_show].values())
                    print("price_range "+str(price_range))
                    print("color "+str(color))
                    print("size "+str(size))
                    return JsonResponse(my_product_,safe=False)
                if((str(color)=="" or str(color)=="All Color") and ( str(size) != "" or str(size) != "All Size") and (str(price_range) != "All Prices" or str(price_range) != "")  ):
                    prices_data_less_than=int(prices.split()[0].replace("$",""))
                    prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                    my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than,size_of_clothes__icontains=str(size)).order_by("-Number_of_review")[:number_of_data_to_show].values())
                    print(my_product_)
                    print("price_range "+str(price_range))
                    print("color "+str(color))
                    print("size "+str(size))
                    return JsonResponse(my_product_,safe=False)
                if((str(color)!="" or str(color)!="All Color") and ( str(size) != "" or str(size) != "All Size") and (str(price_range) != "All Prices" or str(price_range) != "")  ):
                    prices_data_less_than=int(prices.split()[0].replace("$",""))
                    prices_data_bigger_than=int(prices.split()[2].replace("$",""))
                    my_product_=list(Products.objects.filter(product_name__icontains=str(get_data_from_client_by_search),price__lte=prices_data_bigger_than,price__gte=prices_data_less_than,color__icontains=str(color),size_of_clothes__icontains=str(size)).order_by("-Number_of_review")[:number_of_data_to_show].values())
                    print(my_product_)
                    print("price_range "+str(price_range))
                    print("color "+str(color))
                    print("size "+str(size))
                    return JsonResponse(my_product_,safe=False)



        else:
            return JsonResponse({"Error_Search_is_Null":"Search Field is Empty Please Search For Product At First"})
    
    @xframe_options_exempt
    @csrf_exempt
    def star(self,request,cat_name="",child_name="",prod_name=""):
        if(request.method=="POST"):
            cat_name=request.POST.get("view_product_category")
            child_name=request.POST.get("view_child_category")
            prod_name=request.POST.get("view_product_name")
            print(cat_name)
            print(child_name)
            print(prod_name)
            return render(request,"star_ref.html",context=cont)
        if(request.method=="GET"):
            data=Products.objects.filter(category_name=cat_name,child_category=child_name,product_name=prod_name).values("Number_of_review")
            cont={"general_rate":data,"prod_name":str(prod_name),"child_name":str(child_name),"cat_name":str(cat_name)}




            return render(request,"star_ref.html",cont)


        # elif(request.method=="GET" and self.get_data_from_Search_bar()!=None and (self.get_data_from_Category_bar()==None) and (self.get_data_from_Category_bar() == None) and (self.get_view_product == None)):     
        #     print("Iam Here 5")
        #     return render(request,"shop.html","categories_list_":categories_list,"account":my_acc,"F_Name":F_Name,"L_Name":L_Name,"profile_image":profile_image,"categories":list_just_names}))

        # elif(request.method=="GET" and self.get_data_from_Category()!=None and (self.get_data_from_Category_bar()==None) and (self.get_data_from_Search_bar() == None) and (self.get_view_product == None)):     
        #     print("Iam Here 6")
        #     return render(request,"shop.html","categories_list_":categories_list,"account":my_acc,"F_Name":F_Name,"L_Name":L_Name,"profile_image":profile_image,"categories":list_just_names})


        # elif(request.method=="GET" and self.get_data_from_Category_bar()!=None and (self.get_data_from_Category()==None) and (self.get_data_from_Search_bar() == None) and (self.get_view_product == None)):     
        #     print("Iam Here 7")
        #     return render(request,"shop.html","categories_list_":categories_list,"account":my_acc,"F_Name":F_Name,"L_Name":L_Name,"profile_image":profile_image,"categories":list_just_names})
        

        # elif(request.method=="GET" and self.get_view_product()!=None and (self.get_data_from_Category()==None) and (self.get_data_from_Search_bar() == None) and (self.get_data_from_Category_bar==None) ):     
        #     print("Iam Here 8")
        #     return render(request,"shop.html",self.get_view_product())
        # else:
            
        #     return render(request,"shop.html","categories_list_":categories_list,"account":my_acc,"F_Name":F_Name,"L_Name":L_Name,"profile_image":profile_image,"categories":list_just_names))