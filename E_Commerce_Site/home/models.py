from pyexpat import model
from django.db import models
from django.core.exceptions import ValidationError

# Create your models here.
class sponser(models.Model):
    img_sp= models.ImageField(upload_to = "sponser_image/")
    time_Added = models.DateTimeField(auto_now_add = True)

    def clean(self):
        self.is_cleaned = True
        x=2
        if sponser.objects.all().count() == x:
            raise ValidationError("Please Some Delete Some data First From This Table Max is 2 Record Only")
        super(sponser, self).clean()

    def save(self, *args, **kwargs):
        if not self.is_cleaned:
            self.full_clean()
        super(sponser, self).save(*args, **kwargs) 


class Lots_Sponser(models.Model):
    img_sp = models.ImageField(upload_to = "sponser_lots_img/From_DB/")
    time_Added = models.DateTimeField(auto_now_add = True)
    Brief_desc = models.TextField()
    