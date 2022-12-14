# Generated by Django 3.2.8 on 2022-12-13 14:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ListTags',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('group', models.CharField(max_length=100)),
                ('key', models.CharField(max_length=100)),
                ('name', models.CharField(max_length=100)),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='PlayList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(max_length=200)),
                ('thumbnail', models.CharField(max_length=500)),
                ('duration', models.DurationField()),
                ('date_create', models.CharField(max_length=100)),
                ('description', models.TextField()),
                ('type', models.CharField(default='PLAYLIST', max_length=100)),
            ],
            options={
                'ordering': ['created_at'],
            },
        ),
        migrations.CreateModel(
            name='Songs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(max_length=200)),
                ('thumbnail', models.CharField(max_length=500)),
                ('duration', models.CharField(max_length=100)),
                ('type', models.CharField(default='SONG', max_length=100)),
                ('date_release', models.IntegerField()),
                ('date_create', models.IntegerField()),
                ('description', models.TextField()),
            ],
            options={
                'abstract': False,
            },
        ),
        migrations.CreateModel(
            name='Artists',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('name', models.CharField(max_length=200)),
                ('short_link', models.CharField(max_length=100)),
                ('image_url', models.CharField(max_length=200)),
                ('artist_event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='playlist_detail.songs')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
