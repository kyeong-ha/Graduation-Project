# Generated by Django 3.2.18 on 2023-05-10 15:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mbtiapp', '0006_auto_20230510_1512'),
    ]

    operations = [
        migrations.AddField(
            model_name='mbti',
            name='id',
            field=models.BigAutoField(auto_created=True, default=5, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='mbti',
            name='mbti',
            field=models.TextField(),
        ),
    ]
