# from django.contrib import admin
# from .models import Products
# # Register your models here.
# from django import forms
# from django.forms import ModelForm


# COLOR_CHOICES = (
#     ("0","0"),
#     ('Red','Red'),
#     ('Green','Green'),
#     ('Blue', 'Blue'),
#     ('Black','Black'),
#     ('White','White'),


# )

# class ProductAdminForm(ModelForm):
#     color = forms.MultipleChoiceField(choices = COLOR_CHOICES)

#     class Meta:
#         model = Products
#         fields = "__all__"

#     def clean_color(self):
#         color = self.cleaned_data['color']
#         print(color)
#         if not color:
#             raise forms.ValidationError("...")

#         # if len(color) > 6:
#         #     raise forms.ValidationError("...")
#         c_list=[]
#         for c in color:
#             c_list.append(c)
#         return c_list
