from django.contrib import admin
from .models import Products
# Register your models here.



class search_and_display(admin.ModelAdmin):
    search_fields=('product_name',"child_category","Factory_Name","Model_Name","product_serial_number")
    list_display= ('product_name', 'child_category', 'category_name', 'Factory_Name',"Model_Name","Quantity","Number_of_review","product_serial_number","main_img")
    exclude = ('Number_of_review',)

admin.site.register(Products,search_and_display)