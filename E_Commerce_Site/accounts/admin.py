from django.contrib import admin

from .models import Accounts
# class AccountsAdmin(admin.ModelAdmin):
#     fields=["F_Name","L_Name","Account","Password","Mobile_Number","Address_1","Address_2","Country",
#     "City","State","Zip_Code","Role"]
# # Register your models here.


class search(admin.ModelAdmin):
    search_fields=('F_Name',"L_Name","Account","Role")
    list_display= ('F_Name', 'L_Name', 'Account',"Role","Gender","profile_image")


admin.site.register(Accounts,search)