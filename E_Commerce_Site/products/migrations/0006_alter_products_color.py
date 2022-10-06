# Generated by Django 4.0.4 on 2022-10-04 20:23

from django.db import migrations
import multiselectfield.db.fields


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_alter_products_color'),
    ]

    operations = [
        migrations.AlterField(
            model_name='products',
            name='color',
            field=multiselectfield.db.fields.MultiSelectField(choices=[('0', '0'), ('Red', 'Red'), ('Green', 'Green'), ('Blue', 'Blue'), ('Black', 'Black'), ('White', 'White')], default='0', max_length=28),
        ),
    ]
