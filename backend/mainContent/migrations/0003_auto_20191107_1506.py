# Generated by Django 2.2.6 on 2019-11-07 14:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainContent', '0002_auto_20191016_1101'),
    ]

    operations = [
        migrations.AddField(
            model_name='maincontent',
            name='textPart3',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='maincontent',
            name='titlePart3',
            field=models.CharField(default=1, max_length=120),
            preserve_default=False,
        ),
    ]