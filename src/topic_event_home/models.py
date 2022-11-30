from django.db import models
from hashids import Hashids
from django.utils.duration import duration_string


# hashids = Hashids(min_length=12)

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

    def get_hash_id(self):
        return self.encode_hash_id(self.id)


# Create your models here.
class TopicEvents(BaseModel):
    class Meta:
        ordering = ['created_at']

    group_name = models.CharField(max_length=100)

    def __str__(self):
        return self.group_name


class ListPlaylists(BaseModel):
    class Meta:
        ordering = ['created_at']

    title = models.CharField(max_length=200)
    thumbnail = models.CharField(max_length=300)
    duration = models.DurationField()
    type = models.CharField(max_length=100)
    date_modify = models.CharField(max_length=100)
    topic_event = models.ForeignKey(TopicEvents, on_delete=models.CASCADE)

    def duration_to_string(self):
        return  duration_string(self.duration)

    def __str__(self):
        return self.title


class Artists(BaseModel):
    name = models.CharField(max_length=200)
    short_link = models.CharField(max_length=100)
    image_url = models.CharField(max_length=200)
    artist_event = models.ForeignKey(ListPlaylists, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
