from django.shortcuts import redirect, render
from accounts.models import Accounts
from products.models import Products
from django.http import JsonResponse

# Create your views here.
from global_category_home.models import discounts,global_category
from .models import Contact_Us,Company_Details
import re
 
regex = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

 
 
def check(email):
    if(re.fullmatch(regex, email)):
        return "Valid Email"
 
    else:
        return "Invalid Email"

def normal_view_con_us(request):

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
    comp_details=Company_Details.objects.values("Address","E_Mail","Company_Number")
    print(comp_details)
    print(list_just_names)

    context={"account":my_acc,"F_Name":F_Name,"L_Name":L_Name,"profile_image":profile_image,"categories":list_just_names,"cmp_det" : comp_details}
    return render(request,"contact.html",context)

def send_message_to_technical_and_managers(request):
    if(request.method=="POST"):
        first_name=request.POST.get("first_name")
        account=request.POST.get("account")
        subject=request.POST.get("subject")
        message=request.POST.get("message")
        acc=request.session.get('Account')
        f_name=request.session.get('F_Name')
        print(account)
        if(acc==None):
            if(first_name == ""):
                return JsonResponse({"failed":"first name is empty"})
            

            elif(subject == ""):
                return JsonResponse({"failed":"subject is empty"})

            elif(message ==""):
                return JsonResponse({"failed":"message is empty"})
            
            elif(account!=None and check(str(account)) != "Valid Email"):
                    return JsonResponse({"failed":"account should containg @ and text .com for example"})
            else:
                cont_us=Contact_Us(First_Name=first_name,Account=account,Subject=subject,Message=message)
                cont_us.save()
                return JsonResponse({"success":"success"})
        elif(acc!=None):
            if(subject == ""):
                return JsonResponse({"failed":"subject is empty"})

            elif(message ==""):
                return JsonResponse({"failed":"message is empty"})
            else:
                cont_us=Contact_Us(First_Name=f_name,Account=acc,Subject=subject,Message=message)
                cont_us.save()
                return JsonResponse({"success":"success"})
    else:
        return JsonResponse({"failed":"failed"})
