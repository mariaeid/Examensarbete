# Generated by Django 2.2.6 on 2019-10-29 14:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0005_remove_product_buyerid'),
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('product', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='product.Product')),
                ('buyerId', models.IntegerField()),
            ],
        ),
    ]
