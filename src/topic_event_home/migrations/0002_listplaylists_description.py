# Generated by Django 3.2.8 on 2022-12-14 14:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('topic_event_home', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='listplaylists',
            name='description',
            field=models.TextField(default=''),
            preserve_default=False,
        ),
    ]
