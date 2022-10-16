from itertools import product
from statistics import mode
from unittest.util import _MAX_LENGTH
from django.db import models
# from multiselectfield import MultiSelectField

# Create your models here.

class Purchased(models.Model):

    global_category=models.CharField(max_length=200)
    sub_category=models.CharField(max_length=200)
    product_name=models.CharField(max_length=200)
    product_color=models.CharField(max_length=200)
    product_size=models.CharField(max_length=200)
    product_quantity=models.IntegerField()
    product_price=models.CharField(max_length=200)
    prod_image=models.ImageField(upload_to = "cards/")
    account=models.CharField(max_length=200)
    user_first_name=models.CharField(max_length=200)
    user_second_name=models.CharField(max_length=200)
    time_Added = models.DateTimeField(auto_now_add = True)
