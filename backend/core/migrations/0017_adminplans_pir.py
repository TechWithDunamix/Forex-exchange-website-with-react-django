# Generated by Django 5.0.7 on 2024-07-13 13:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0016_transaction_trsx'),
    ]

    operations = [
        migrations.AddField(
            model_name='adminplans',
            name='pir',
            field=models.IntegerField(default=5),
        ),
    ]
