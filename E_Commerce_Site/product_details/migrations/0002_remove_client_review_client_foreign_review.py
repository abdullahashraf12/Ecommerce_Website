# Generated by Django 4.0.4 on 2022-09-25 15:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product_details', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='client_review',
            name='client_foreign_review',
        ),
    ]
