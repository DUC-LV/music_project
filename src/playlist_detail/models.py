from django.db import models
from hashids import Hashids
from mptt.models import MPTTModel, TreeForeignKey
from django.utils.duration import duration_string
from topic_event_home.models import ListPlaylists


def get_hash_ids_default():
    return Hashids(min_length=12)


class BaseModel(models.Model):
    class Meta:
        abstract = True

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    _HASH_IDS = get_hash_ids_default()

    @classmethod
    def encode_hash_id(cls, from_id):
        return cls._HASH_IDS.encode(from_id)

    @classmethod
    def decode_hash_id(cls, from_id):
        return cls._HASH_IDS.decode(from_id)[0]

    def get_hash_id(self):
        return self.encode_hash_id(self.id)


# Create your models here.

class Songs(BaseModel):
    title = models.CharField(max_length=200)
    thumbnail = models.CharField(max_length=500)
    duration = models.CharField(max_length=100)
    type = models.CharField(max_length=100, default="SONG")
    date_release = models.IntegerField()
    date_create = models.IntegerField()
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
    short_link = models.CharField(max_length=100)
    image_url = models.CharField(max_length=200)
    artist_event = models.ForeignKey(Songs, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
