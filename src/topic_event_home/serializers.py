from rest_framework import serializers
from .models import TopicEvents, ListPlaylists, Artists


class TopicEventsSerializers(serializers.ModelSerializer):
    class Meta:
        model = TopicEvents
        fields = ["created", "groupName"]


class ListPlaylistsSerializers(serializers.ModelSerializer):
    class Meta:
        model = ListPlaylists
        fields = ["created", "key", "title", "thumbnail", "duration", "type", "dateModify", "topic_eventID"]


class ArtistsSerializers(serializers.ModelSerializer):
    class Meta:
        model = Artists
        fields = ["created", "artistId", "name", "shortLink", "imageUrl", "artist_eventID"]