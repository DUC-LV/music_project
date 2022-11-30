from rest_framework import serializers
from .models import ShowCaseHome


class LiveTvSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShowCaseHome
        fields = ["created", "title", "key", "thumbnail", "url", "description", "order", "imageUrl"]
