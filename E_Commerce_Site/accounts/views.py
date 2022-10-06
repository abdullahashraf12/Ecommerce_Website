from http.client import HTTPResponse
from msvcrt import LK_LOCK
from re import L
from django.shortcuts import render,redirect
from .models import Accounts
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
# Create your views here.
from cryptography.fernet import Fernet
import bs4 as bs
from cryptography import *
from home.views import home
key = b'jrlBHCsyJP4X6xsCixxNh0zVNts_VmG_BVzVHS8Bm-I='
t="false"
def sign_in(request):
    
    if request.method == "POST" :
        account=request.POST.get("account")
        Password1=request.POST.get("password")
        acc=Accounts.objects.filter(Account=account).values()
        a=list(acc)
        pass_from_db=""
        print(len(a))
        for n in a:
            Password=dict(n).get("Password")
            pass_from_db=Password
        cipher_suite = Fernet(key)
        if(len(a) == 0):
            print("account is not registered")
            return render(request,"Sign_In.html",{"check_s_":"a"})
        elif(len(a)>=1):
            decoded_text = cipher_suite.decrypt(bytes(str(pass_from_db).replace("b'","").replace("'",""), encoding="utf-8"))
            if(Password1!=str(decoded_text).replace("b'","").replace("'","")):
                print("wrong password"+str(decoded_text))
                return render(request,"Sign_In.html",{"check_s_":"wp"})
            else:
                # request.session['First_name']
                # acc
                f_name=acc.values('F_Name')
                first_name=""
                for i in f_name:
                    first_name=i.get("F_Name")

                l_name=acc.values('L_Name')
                last_name=""
                for i in l_name:
                    last_name=i.get("L_Name")

                p_img=acc.values('profile_image')
                profile_image=""
                for i in p_img:
                    profile_image=i.get("profile_image")
                request.session['Account']=account
                request.session['F_Name']=first_name
                request.session['L_Name']=last_name
                request.session['p_img']=profile_image
                return redirect(home)
    else:
        return render(request,"Sign_In.html",{"check_s_":"normal"})







# def sign_in_validation(request):
#     if request.method=="POST":
#        print(str(decoded_text).replace("b'","").replace("'",""))
#             print("true")
#             return JsonResponse({"acc":"succ"})
#         else:
#             pass
#     return JsonResponse({"acc":list("")})

def sign_up(request):
    

    if(request.method=="POST" and request.FILES['profile_image']):
        F_Name=request.POST.get("F_name")
        L_Name=request.POST.get("L_Name")
        Account=request.POST.get("Account")
        Password1=str(request.POST.get("password"))
        Password2=str(request.POST.get("password2"))
        Gender=request.POST.get("Gender")
        Mobile_Number=int(request.POST.get("Mobile_Number"))
        Address_1=request.POST.get("Address1")
        Address_2=request.POST.get("Address2")
        Country=request.POST.get("Country")
        City=request.POST.get("City")
        prof_img = request.FILES['profile_image']

        # State=request.POST.get("State")
        Zip_Code=request.POST.get("Zip_Code")
        A=Accounts.objects.filter(Account=Account).values()
        b=list(A)
        print(Gender)
        cipher_suite = Fernet(key)
        encoded_text = cipher_suite.encrypt(bytes(Password1,'utf-8'))

        if(len(b)!= 0 ):
            print("can't procced")
            return render(request,"Sign_up.html",{"messge":"this account is already registered we cannot proceed"})
        elif(  Password1 != Password2):
         return render(request,"Sign_up.html",{"messge":"Your Password is The Same"})

        else:
            print("procced")
            data=Accounts(F_Name=F_Name,L_Name=L_Name,Account=Account,Password=encoded_text,Gender=Gender,Mobile_Number=Mobile_Number,Address_1=Address_1,Address_2=Address_2,Country=Country,City=City,State=City,Zip_Code=Zip_Code,profile_image=prof_img)
            data.save()
            global t
            a="t"
            t=a
            return redirect("sign_in")
        # if(F_Name,L_Name,)

    return render(request,"Sign_up.html",{})
# @csrf_exempt
def sign_up_validation(request):
    if(request.method=="POST"):
        acc=Accounts.objects.all()
        return JsonResponse({"acc":list(acc.values())})
    return JsonResponse({"acc":list("")})


def logout(request):
    try:
        del request.session['Account']
        del request.session['F_Name']
        del request.session['L_Name']
        del request.session['p_img']
        return redirect(home)
    except:
        return render(request,"error_page.html")

