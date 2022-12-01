from rest_framework import serializers
from .models import Songs, Artists


class SongsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Songs
        fields = ["created_at", "title", "thumbnail", "duration", "date_release", "date_create"]


class ArtistsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Artists
        fields = ["created_at", "name", "short_link", "image_url", "artist_event"]
