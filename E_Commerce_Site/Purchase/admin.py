from django.contrib import admin
from .models import Purchased
# Register your models here.
class search_and_display(admin.ModelAdmin):
    search_fields=('global_category',"sub_category","product_name","product_color","product_size","product_quantity","account","user_first_name","user_second_name")
    list_display= ('global_category', 'sub_category', 'product_name', 'account',"user_first_name","user_second_name","product_color","product_size","product_quantity")

admin.site.register(Purchased,search_and_display)