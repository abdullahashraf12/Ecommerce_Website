from random import betavariate
from django.contrib import admin
from .models import sponser,Lots_Sponser
# Register your models here.
class search_and_display_sponser(admin.ModelAdmin):
    search_fields = ('time_Added',)
    list_display = ('img_sp', 'time_Added',)

class search_and_display_Lots_Sponser(admin.ModelAdmin):
    search_fields = ('time_Added','Brief_desc',)
    list_display = ('img_sp', 'Brief_desc', 'time_Added',)


admin.site.register(sponser,search_and_display_sponser)
admin.site.register(Lots_Sponser,search_and_display_Lots_Sponser)