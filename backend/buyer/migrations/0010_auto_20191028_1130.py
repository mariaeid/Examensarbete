# Generated by Django 2.2.6 on 2019-10-28 10:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('buyer', '0009_auto_20191028_1122'),
    ]

    operations = [
        migrations.RenameField(
            model_name='buyer',
            old_name='last_name',
            new_name='lastName',
        ),
        migrations.RenameField(
            model_name='buyer',
            old_name='street_address',
            new_name='streetAddress',
        ),
        migrations.RenameField(
            model_name='buyer',
            old_name='user_name',
            new_name='username',
        ),
        migrations.RenameField(
            model_name='buyer',
            old_name='zip_code',
            new_name='zipCode',
        ),
    ]