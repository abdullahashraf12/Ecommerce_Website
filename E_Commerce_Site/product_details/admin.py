from django.contrib import admin
from .models import client_review




class search_and_display_client_review(admin.ModelAdmin):
    search_fields=('product_name',"rating","account")
    list_display= ('product_name', 'rating', 'account')


admin.site.register(client_review,search_and_display_client_review)