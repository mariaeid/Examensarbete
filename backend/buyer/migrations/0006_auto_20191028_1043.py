# Generated by Django 2.2.6 on 2019-10-28 09:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buyer', '0005_auto_20191027_2041'),
    ]

    operations = [
        migrations.AlterField(
            model_name='buyer',
            name='phone',
            field=models.CharField(max_length=120),
        ),
    ]
