from django.db import models
from src.models import BaseModel


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
