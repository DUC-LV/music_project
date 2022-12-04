# Generated by Django 3.2.8 on 2022-12-03 15:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('new_releases', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SongRanking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('ranking', models.IntegerField(null=True)),
                ('week', models.IntegerField()),
                ('song', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='new_releases.songs')),
            ],
            options={
                'ordering': ['created_at'],
            },
        ),
    ]
