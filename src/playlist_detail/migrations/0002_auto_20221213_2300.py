# Generated by Django 3.2.8 on 2022-12-13 16:00

from django.db import migrations, models
import django.db.models.deletion
import mptt.fields


class Migration(migrations.Migration):

    dependencies = [
        ('playlist_detail', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='listtags',
            name='group',
        ),
        migrations.AddField(
            model_name='listtags',
            name='level',
            field=models.PositiveIntegerField(default=1, editable=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='listtags',
            name='lft',
            field=models.PositiveIntegerField(default=1, editable=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='listtags',
            name='parent',
            field=mptt.fields.TreeForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='playlist_detail.listtags'),
        ),
        migrations.AddField(
            model_name='listtags',
            name='rght',
            field=models.PositiveIntegerField(default=1, editable=False),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='listtags',
            name='tree_id',
            field=models.PositiveIntegerField(db_index=True, default=1, editable=False),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='PlaylistSongs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now_add=True)),
                ('playlist', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='playlist_detail.playlist')),
                ('song', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='playlist_detail.songs')),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
