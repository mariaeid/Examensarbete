# Generated by Django 2.2.6 on 2019-10-28 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buyer', '0007_auto_20191028_1059'),
    ]

    operations = [
        migrations.AlterField(
            model_name='buyer',
            name='first_name',
            field=models.CharField(blank=True, max_length=120),
        ),
        migrations.AlterField(
            model_name='buyer',
            name='last_name',
            field=models.CharField(blank=True, max_length=120),
        ),
        migrations.AlterField(
            model_name='buyer',
            name='street_address',
            field=models.CharField(blank=True, max_length=120),
        ),
        migrations.AlterField(
            model_name='buyer',
            name='zip_code',
            field=models.CharField(blank=True, max_length=120),
        ),
    ]