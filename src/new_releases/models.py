from django.db import models
from django.utils.duration import duration_string
from src.models import BaseModel


# Create your models here.


class Songs(BaseModel):
    class Meta:
        ordering = ['created_at']

    title = models.CharField(max_length=200)
    thumbnail = models.CharField(max_length=500)
    duration = models.DurationField()
    date_release = models.IntegerField()
    date_create = models.IntegerField()

    def duration_to_string(self):
        return duration_string(self.duration)

    def __str__(self):
        return self.title


class Artists(BaseModel):
    name = models.CharField(max_length=200)
    short_link = models.CharField(max_length=100)
    image_url = models.CharField(max_length=200)
    artist_event = models.ForeignKey(Songs, on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class SongRanking(BaseModel):
    class Meta:
        ordering = ['created_at']

    song = models.ForeignKey(Songs, on_delete=models.CASCADE)
    ranking = models.IntegerField(null=True)
    week = models.IntegerField()  # 1 -> 52

    def __str__(self):
        return self.song.title
