# Generated by Django 3.2.18 on 2023-05-10 15:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mbtiapp', '0010_auto_20230510_1524'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mbti',
            name='mbti',
        ),
    ]
