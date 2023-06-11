from tabnanny import verbose
from django.db import models
from django.contrib import admin

# Create your models here.
class Accounts(models.Model):
    F_Name=models.CharField(max_length=255)
    L_Name=models.CharField(max_length=255)
    Account=models.CharField(max_length=255,primary_key=True)
    profile_image = models.ImageField(upload_to = "account/")
    Password=models.CharField(max_length=255)
    Gender=models.CharField(max_length=255)
    Mobile_Number=models.CharField(max_length=255)
    Address_1=models.CharField(max_length=255)
    Address_2=models.CharField(max_length=255)
    Country=models.CharField(max_length=255)
    City=models.CharField(max_length=255)
    State=models.CharField(max_length=255)
    Zip_Code=models.CharField(max_length=255)
    Role=models.CharField(max_length=255,default="Client")