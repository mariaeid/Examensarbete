# Generated by Django 2.2.6 on 2019-10-28 19:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0004_product_buyerid'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='buyerId',
        ),
    ]
