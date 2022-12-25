from django.db import models
from django.utils.duration import duration_string
from src.models import BaseModel


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
