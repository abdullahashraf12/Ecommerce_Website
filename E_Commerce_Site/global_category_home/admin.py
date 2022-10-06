from django.contrib import admin

# Register your models here.
from .models import discounts,global_category,category_images_for_home

class search_and_display_global(admin.ModelAdmin):
    search_fields=('category','small_description')
    list_display= ('category', 'small_description', 'Image_random')





admin.site.register(global_category,search_and_display_global)

class discount_display(admin.ModelAdmin):
    search_fields=('category_type__category',"discount_precent")
    list_display= ("category_type","discount_precent","Image_discount")


admin.site.register(discounts,discount_display)



class category_images_for_home_display(admin.ModelAdmin):
    search_fields=('category_type__category',"small_brief_text")
    list_display= ("category_type","small_brief_text","global_images")


admin.site.register(category_images_for_home,category_images_for_home_display)