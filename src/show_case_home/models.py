from django.db import models


# Create your models here.
class ShowCaseHome(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    title = models.CharField(max_length=200)
    key = models.CharField(primary_key=True, max_length=100)
    thumbnail = models.CharField(max_length=300)
    url = models.CharField(max_length=300)
    description = models.CharField(max_length=200)
    order = models.IntegerField()
    imageUrl = models.CharField(max_length=200)

    class Meta:
        ordering = ['created']
