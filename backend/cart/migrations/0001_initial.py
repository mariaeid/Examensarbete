# Generated by Django 2.2.6 on 2019-10-28 19:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Cart',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('productId', models.IntegerField()),
                ('buyerId', models.IntegerField()),
            ],
        ),
    ]