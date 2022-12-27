from django.db import models
from playlist_detail.models import Songs
from src.models import BaseModel


# Create your models here.
class StreamUrl(BaseModel):
    quality = models.IntegerField(default=128)
    stream_url = models.CharField(max_length=300)
    song_name = models.ForeignKey(Songs, on_delete=models.CASCADE)
