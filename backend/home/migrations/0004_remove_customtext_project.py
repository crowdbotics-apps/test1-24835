# Generated by Django 2.2.19 on 2021-03-04 01:00

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_customtext_project'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customtext',
            name='project',
        ),
    ]
