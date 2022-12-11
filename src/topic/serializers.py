from rest_framework import serializers
from .models import ListTopic


class ListTopicSerializers:
    class Meta:
        model = ListTopic
        fields = ["created_at", "title", "description", "cover_image", "thumbnail"]
