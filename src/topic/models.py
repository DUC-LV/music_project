from django.db import models
from src.models import BaseModel

# Create your models here.


class ListTopic(BaseModel):
    class Meta:
        ordering = ['created_at']

    title = models.CharField(max_length=200)
    description = models.TextField()
    cover_image = models.CharField(max_length=200)
    thumbnail = models.CharField(max_length=300)

    def __str__(self):
        return self.title
