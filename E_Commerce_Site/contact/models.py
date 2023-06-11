from cgi import print_form
from email.headerregistry import Address
from email.message import Message
from pyexpat import model
from statistics import mode
from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.

class Contact_Us(models.Model):
    auto_increment_id = models.AutoField(primary_key=True)
    First_Name=models.CharField(max_length=200)
    Account=models.CharField(max_length=200)
    Subject=models.CharField(max_length=255)
    Message=models.TextField()
    
    def __str__(self) :
        return str("Account From : "+self.Account+" , Subject "+self.Subject)
class Company_Details(models.Model):
    Company_Name=models.CharField(max_length=200,primary_key=True)
    Address=models.CharField(max_length=200)
    E_Mail=models.CharField(max_length=200)
    Company_Number=models.CharField(max_length=200)
    def __str__(self) :
        return str("Company Name: "+str(self.Company_Name))
    def clean(self):
        self.is_cleaned = True
        x=1
        if Company_Details.objects.all().count() == x:
            raise ValidationError("Max is 1 Record Only")
        super(Company_Details, self).clean()

    def save(self, *args, **kwargs):
        if not self.is_cleaned:
            self.full_clean()
        super(Company_Details, self).save(*args, **kwargs) 