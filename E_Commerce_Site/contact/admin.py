from django.contrib import admin

# Register your models here.
from .models import Contact_Us,Company_Details


class search_and_display_Contact(admin.ModelAdmin):
    search_fields=('First_Name','Account',"Subject")
    list_display= ('First_Name', 'Account', 'Subject', 'Message')


admin.site.register(Contact_Us,search_and_display_Contact)

class Display_Company_Info(admin.ModelAdmin):
    list_display= ('Company_Name', 'E_Mail', 'Company_Number',"Address")



admin.site.register(Company_Details,Display_Company_Info)