# Generated by Django 4.0.4 on 2022-09-29 13:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contact', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Company_Details',
            fields=[
                ('Company_Name', models.CharField(max_length=200, primary_key=True, serialize=False)),
                ('Address', models.CharField(max_length=200)),
                ('E_Mail', models.CharField(max_length=200)),
                ('Company_Number', models.CharField(max_length=200)),
            ],
        ),
    ]
