# Generated by Django 3.2.8 on 2022-12-13 16:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('topic_event_home', '0001_initial'),
        ('playlist_detail', '0002_auto_20221213_2300'),
    ]

    operations = [
        migrations.AlterField(
            model_name='playlistsongs',
            name='playlist',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='topic_event_home.listplaylists'),
        ),
        migrations.DeleteModel(
            name='PlayList',
        ),
    ]