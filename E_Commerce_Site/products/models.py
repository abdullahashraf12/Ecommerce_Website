from django.db import models
# Create your models here.
# from django_resized import ResizedImageField
from django import forms
from global_category_home.models import global_category,discounts
from multiselectfield import MultiSelectField

COLOR_CHOICES = (
    ("0","0"),
    ('Red','Red'),
    ('Green','Green'),
    ('Blue', 'Blue'),
    ('Black','Black'),
    ('White','White'),


)
Sizes_clothes= (
    ("0","0"),
    ("XS","XS"),
    ('S','S'),
    ('M','M'),
    ('L', 'L'),
    ('XL','XL'),
    ('XXL','XXL'),
    ('XXXL','XXXL'),
)

currency_type= (
    ("EGP","EGP"),
    ("$","$"),
)
weight_type= (
    ("Gram","Gram"),
    ("Kilogram","Kilogram"),
)

quantity_of_product=(
    ("1","1"),
    ("2","2"),
    ("3","3"),
    ("4","4"),

    ("5","5"),
    ("10","10"),
    ("15","15"),
    ("20","20"),
    ("25","25"),
    ("30","30"),
    ("35","35"),
    ("40","40"),
    ("45","45"),
    ("50","50"),
    ("55","55"),
    ("60","60"),
    ("65","65"),
    ("70","70"),
    ("75","75"),
    ("80","80"),
    ("85","85"),
    ("90","90"),
    ("95","95"),
    ("100","100"),

)
class Products(models.Model):
    category_name=models.ForeignKey(global_category,on_delete=models.CASCADE)
    child_category=models.CharField(max_length=255)
    product_name = models.CharField(max_length = 200)
    Factory_Name= models.CharField(max_length = 100)
    Model_Name= models.CharField(max_length = 100)
    price= models.IntegerField()
    currency=models.CharField(max_length = 200,choices=currency_type,default="EGP")
    last_price_this_product_added=models.CharField(max_length = 20,default="0")
    Quantity=models.CharField(max_length = 200,choices=quantity_of_product,default="1")
    time_Added = models.DateTimeField(auto_now_add = True)
    main_img = models.ImageField(upload_to = "images/")
    img_list_1 = models.FileField(upload_to = "images/",blank=True)
    img_list_2 = models.FileField(upload_to = "images/",blank=True)
    img_list_3 = models.FileField(upload_to = "images/",blank=True)
    img_list_4 = models.FileField(upload_to = "images/",blank=True)
    img_list_5 = models.FileField(upload_to = "images/",blank=True)
    
    color = MultiSelectField(choices=COLOR_CHOICES,default="0",max_length=1000)
    size_of_clothes =MultiSelectField(choices=Sizes_clothes,default="0",max_length=1000)
    weight_of_the_product=models.CharField(max_length = 25)
    weight_of_the_product_select_type=models.CharField(max_length = 25,choices=weight_type)
    Package_Dimensions=models.CharField(max_length=100)
    Number_of_review=models.IntegerField(default=0)
    brief_description=models.CharField(max_length = 200)
    Full_description=models.TextField()
    information=models.TextField()
    product_serial_number=models.CharField(max_length=255)
    # renames the instances of the model
    # with their title name
    def __str__(self):
        return str(self.product_name)
    class Meta:
        unique_together = (("child_category",'product_name'),)
