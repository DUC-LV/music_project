from django.db import models
from hashids import Hashids
from django.utils.duration import duration_string
from src.models import BaseModel


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
    description = models.TextField()

    def duration_to_string(self):
        return duration_string(self.duration)

    def __str__(self):
        return self.title


class Artists(BaseModel):
    name = models.CharField(max_length=200)
    short_link = models.CharField(max_length=100)
    image_url = models.CharField(max_length=200)
    artist_event = models.ForeignKey(ListPlaylists, on_delete=models.CASCADE)

    def __str__(self):
        return self.name
