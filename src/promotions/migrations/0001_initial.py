# Generated by Django 3.2.8 on 2022-12-25 13:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='TopicShowCase',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('topic_name', models.CharField(max_length=200)),
            ],
            options={
                'ordering': ['created_at'],
            },
        ),
        migrations.CreateModel(
            name='ShowCaseHome',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('title', models.CharField(max_length=200)),
                ('thumbnail', models.CharField(max_length=300)),
                ('url', models.CharField(max_length=300)),
                ('description', models.CharField(max_length=200)),
                ('order', models.IntegerField()),
                ('image_url', models.CharField(max_length=200)),
                ('topic_event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='promotions.topicshowcase')),
            ],
            options={
                'ordering': ['created_at'],
            },
        ),
    ]