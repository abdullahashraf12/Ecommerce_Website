from unicodedata import category
from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.
disc_varies=(

    ('15%','15%'),
    ("25%","25%"),
    ('50%','50%'),
    ('75%','75%'),
    ('100%', '100%'),


)
class global_category(models.Model):
    
    category=models.CharField(max_length=100,primary_key=True)
    Image_random = models.ImageField(upload_to = "images/Image_random/")
    small_description=models.TextField()
    def __str__(self):
        return self.category
class discounts(models.Model):
    discount_precent=models.CharField(max_length=50,choices=disc_varies)
    category_type=models.ForeignKey(global_category,on_delete=models.CASCADE)
    Image_discount = models.ImageField(upload_to = "images/discounts/")

    def clean(self):
        self.is_cleaned = True
        x=2
        if discounts.objects.all().count() == x:
            raise ValidationError("Please Some Delete Some data First From This Table Max is 2 Record Only")
        super(discounts, self).clean()

    def save(self, *args, **kwargs):
        if not self.is_cleaned:
            self.full_clean()
        super(discounts, self).save(*args, **kwargs)  

class category_images_for_home(models.Model):
    global_images = models.ImageField(upload_to = "images/category_images_for_home/")
    category_type=models.ForeignKey(global_category,on_delete=models.CASCADE)
    small_brief_text=models.TextField()
    limits = 3
    def __str__(self):
        return str(self.category_type)

    def clean(self):
        self.is_cleaned = True
        x=5
        if category_images_for_home.objects.all().count() == x:
            raise ValidationError("Please Some Delete Some data First From This Table Max is 5 Record Only")
        super(category_images_for_home, self).clean()

    def save(self, *args, **kwargs):
        if not self.is_cleaned:
            self.full_clean()
        super(category_images_for_home, self).save(*args, **kwargs)        
    # @classmethod
    # def add_record(cls, global_images, category_type,small_brief_text):
    #     if not cls.can_add(global_images,category_type,small_brief_text):
    #         raise Exception('Not Allowed')
    #     else:
    #         instance = cls.objects.create(global_images=global_images,category_type=category_type, small_brief_text=small_brief_text)
    #         return instance

    # @classmethod
    # def can_add(cls, global_images,category_type,small_brief_text):
    #     return cls.objects.filter(global_images=global_images,category_type=category_type,small_brief_text=small_brief_text).count() <= cls.limits