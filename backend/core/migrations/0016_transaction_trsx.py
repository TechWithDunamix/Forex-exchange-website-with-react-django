# Generated by Django 5.0.7 on 2024-07-12 21:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0015_adminplans_investment_delete_plan'),
    ]

    operations = [
        migrations.AddField(
            model_name='transaction',
            name='trsx',
            field=models.CharField(default='code', max_length=50),
        ),
    ]
