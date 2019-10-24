# Generated by Django 2.2.6 on 2019-10-24 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Buyer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=120)),
                ('last_name', models.CharField(max_length=120)),
                ('street', models.CharField(max_length=120)),
                ('street_no', models.CharField(max_length=120)),
                ('zip_code', models.CharField(max_length=120)),
                ('city', models.CharField(max_length=120)),
                ('phone', models.CharField(max_length=12)),
                ('user_id', models.IntegerField()),
            ],
        ),
    ]