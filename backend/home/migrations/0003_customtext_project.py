# Generated by Django 2.2.19 on 2021-03-03 23:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_load_initial_data'),
    ]

    operations = [
        migrations.AddField(
            model_name='customtext',
            name='project',
            field=models.ManyToManyField(blank=True, related_name='customtext_project', to='home.HomePage'),
        ),
    ]
