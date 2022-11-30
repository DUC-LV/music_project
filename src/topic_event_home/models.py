from django.db import models


# Create your models here.
class TopicEvents(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    groupName = models.CharField(max_length=100)

    class Meta:
        ordering = ['created']


class ListPlaylists(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    key = models.CharField(primary_key=True, max_length=100)
    title = models.CharField(max_length=200)
    thumbnail = models.CharField(max_length=300)
    duration = models.CharField(max_length=200)
    type = models.CharField(max_length=100)
    dateModify = models.CharField(max_length=100)
    topic_eventID = models.ForeignKey(TopicEvents, on_delete=models.CASCADE)

    class Meta:
        ordering = ['created']


class Artists(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    artistId = models.CharField(primary_key=True, max_length=100)
    name = models.CharField(max_length=200)
    shortLink = models.CharField(max_length=100)
    imageUrl = models.CharField(max_length=200)
    artist_eventID = models.ForeignKey(ListPlaylists, on_delete=models.CASCADE)