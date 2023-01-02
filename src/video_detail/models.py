from django.db import models
from src.models import BaseModel
from video.models import Videos


# Create your models here.
class StreamUrl(BaseModel):
    quality = models.IntegerField(default=480)
    stream_url = models.CharField(max_length=300)
    video_name = models.ForeignKey(Videos, on_delete=models.CASCADE)
