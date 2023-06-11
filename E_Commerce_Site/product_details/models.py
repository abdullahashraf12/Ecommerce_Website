from django.db import models
# Create your models here.


class client_review(models.Model):
    id=models.BigAutoField(primary_key=True)
    category=models.CharField(max_length=100)
    date=models.DateTimeField(auto_now=True)
    account=models.CharField(max_length=255)
    account_image=models.CharField(max_length=255)
    f_name=models.CharField(max_length=255)
    client_message=models.CharField(max_length=255)
    rating=models.CharField(max_length=255)
    category_name=models.CharField(max_length=255)
    child_category=models.CharField(max_length=255)
    product_name = models.CharField(max_length = 255)
    class Meta:
        unique_together  = (("account",'category_name','child_category','product_name'),)
    
    def __str__(self):
        return "Product name "+str(self.product_name)+" "+str(" Account ")+(self.account)
