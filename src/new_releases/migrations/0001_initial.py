# Generated by Django 3.2.8 on 2022-12-01 15:04

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Songs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(max_length=200)),
                ('thumbnail', models.CharField(max_length=500)),
                ('duration', models.DurationField()),
                ('date_release', models.IntegerField()),
                ('date_create', models.IntegerField()),
            ],
            options={
                'ordering': ['created_at'],
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
                ('artist_event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='new_releases.songs')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
