from itertools import product
from django.shortcuts import render
from django.http import JsonResponse
from .models import sponser
from products.models import Products
from global_category_home.models import global_category,category_images_for_home,discounts
from contact.models import Contact_Us,Company_Details
# from django.views.decorators.clickjacking import xframe_options_exempt

# @xframe_options_exempt
def home(request):
    categories_list=global_category.objects.all()
    cat_list=list(categories_list.values("category"))
    list_just_names=[]
    for cat_name in cat_list:
        # print(cat_name)
        list_just_names.append(cat_name.get("category"))
    print(list_just_names)

    # dictionary_catgory_name["catgory_name"]=list_s
    my_acc = request.session.get('Account')
    F_Name = request.session.get('F_Name')
    L_Name = request.session.get('L_Name')
    profile_image = request.session.get('p_img')
    dis=discounts.objects.all()
    # sub_categories_names=[]
    # for cat_name in list(Products.objects.values("child_category")):
    #     if(str(dict(cat_name).get("child_category")) not in sub_categories_names):
    #         sub_categories_names.append(dict(cat_name).get("child_category"))
    # print(sub_categories_names)
    # "sub_categories":sub_categories_names,
    category_images_for_h=category_images_for_home.objects.all()
    print("no of global_image_data is "+ str(len(category_images_for_h) ))
    category_data=category_images_for_home.objects.all()
    discounts_data=discounts.objects.all()
    # recent_products_added
    print(sponser.objects.all())
    print(Products.objects.filter(category_name="Featured Products"))
    r_p=Products.objects.values("category_name","child_category","product_name","price","currency","time_Added","brief_description","img").order_by('-time_Added')[:8]
    comp_details=Company_Details.objects.values("Address","E_Mail","Company_Number")
    return render(request,"index.html",{"Recent_Products":r_p,"sponser":sponser.objects.all(),"Feature_Products":Products.objects.filter(category_name="Featured Products"),"dis":dis,"num_of_global":range(len(list(category_data.values()))),"category_data":category_data,"discounts_data":discounts_data,"global_image_data":len(category_images_for_h),"categories_list_":categories_list,"account":my_acc,"F_Name":F_Name,"L_Name":L_Name,"profile_image":profile_image,"categories":list_just_names,"cmp_det" : comp_details})

def show_data_pics_category(request):
    if(request.method=="GET"):
        category_data=category_images_for_home.objects.all()
        print(category_data)
        print("ada")
        discounts_data=discounts.objects.all()
        return JsonResponse({"category_data":list(category_data.values()),"discounts_data":list(discounts_data.values())})

def admin_page_redirect(request):
    return render(request,"error_page.html")