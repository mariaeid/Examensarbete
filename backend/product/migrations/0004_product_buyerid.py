# Generated by Django 2.2.6 on 2019-10-28 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0003_auto_20191028_1707'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='buyerId',
            field=models.IntegerField(default=8888888),
            preserve_default=False,
        ),
    ]