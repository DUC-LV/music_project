from django.db import models
from hashids import Hashids
from django.utils.duration import duration_string


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
class TopicVideos(BaseModel):
    class Meta:
        ordering = ['created_at']

    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title


class Videos(BaseModel):
    class Meta:
        ordering = ['created_at']

    title = models.CharField(max_length=200)
    thumbnail = models.CharField(max_length=300)
    duration = models.CharField(max_length=100)
    type = models.CharField(max_length=100, default="VIDEO")
    date_release = models.IntegerField()
    date_create = models.IntegerField()
    topic_video = models.ForeignKey(TopicVideos, on_delete=models.CASCADE)

    def __str__(self):
        return self.title


class Artists(BaseModel):
    name = models.CharField(max_length=200)
    short_link = models.CharField(max_length=100)
    image_url = models.CharField(max_length=200)
    artist_event = models.ForeignKey(Videos, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
