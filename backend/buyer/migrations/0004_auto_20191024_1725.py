# Generated by Django 2.2.6 on 2019-10-24 15:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('buyer', '0003_auto_20191024_1724'),
    ]

    operations = [
        migrations.AlterField(
            model_name='buyer',
            name='user_name',
            field=models.CharField(max_length=120),
        ),
    ]