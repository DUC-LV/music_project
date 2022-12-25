from django.db import models
from mptt.models import MPTTModel, TreeForeignKey
from topic_event_home.models import ListPlaylists
from src.models import BaseModel


# Create your models here.

class Songs(BaseModel):
    title = models.CharField(max_length=200)
    thumbnail = models.CharField(max_length=500)
    duration = models.CharField(max_length=100)
    type = models.CharField(max_length=100, default="SONG")
    date_release = models.IntegerField(default=0)
    date_create = models.IntegerField(default=0)
    description = models.TextField()

    def __str__(self):
        return self.title


class PlaylistSongs(BaseModel):
    playlist = models.ForeignKey(ListPlaylists, on_delete=models.CASCADE)
    song = models.ForeignKey(Songs, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.playlist.title}_{self.song.title}"


class ListTags(BaseModel, MPTTModel):
    parent = TreeForeignKey('self', on_delete=models.CASCADE, null=True, blank=True)
    key = models.CharField(max_length=100)
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Artists(BaseModel):
    name = models.CharField(max_length=200)
    short_link = models.CharField(max_length=100, default="null")
    image_url = models.CharField(max_length=200, default="null")
    artist_event = models.ForeignKey(Songs, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
