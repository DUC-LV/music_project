from django.db import models
from src.models import BaseModel


# Create your models here.
class TopicShowCase(BaseModel):
    class Meta:
        ordering = ['created_at']
    topic_name = models.CharField(max_length=200)

    def __str__(self):
        return self.topic_name


class ShowCaseHome(BaseModel):
    class Meta:
        ordering = ['created_at']
    title = models.CharField(max_length=200)
    thumbnail = models.CharField(max_length=300)
    url = models.CharField(max_length=300)
    description = models.CharField(max_length=200)
    order = models.IntegerField()
    image_url = models.CharField(max_length=200)
    topic_event = models.ForeignKey(TopicShowCase, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
