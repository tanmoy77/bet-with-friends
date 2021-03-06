# Generated by Django 3.2.9 on 2021-11-08 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
                ('location', models.CharField(max_length=40)),
                ('description', models.CharField(max_length=256)),
            ],
            options={
                'unique_together': {('name', 'location')},
            },
        ),
    ]
