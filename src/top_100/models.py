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

class ListTop100(BaseModel):
    class Meta:
        ordering = ['created_at']

    title = models.CharField(max_length=200)
    thumbnail = models.CharField(max_length=500)
    duration = models.DurationField()
    type = models.CharField(max_length=100, default="PLAYLIST")
    date_create = models.IntegerField()
    date_modify = models.CharField(max_length=100)

    def duration_to_string(self):
        return duration_string(self.duration)

    def __str__(self):
        return self.title


class Artists(BaseModel):
    name = models.CharField(max_length=200)
    short_link = models.CharField(max_length=100)
    image_url = models.CharField(max_length=200)
    artist_event = models.ForeignKey(ListTop100, on_delete=models.CASCADE)

    def __str__(self):
        return self.name