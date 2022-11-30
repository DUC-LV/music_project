from django.contrib import admin
from .models import TopicEvents, ListPlaylists, Artists


# Register your models here.
@admin.register(TopicEvents)
class TopicEvents(admin.ModelAdmin):
    list_display = ["created", "groupName"]


admin.register(ListPlaylists)


@admin.register(ListPlaylists)
class ListPlaylists(admin.ModelAdmin):
    list_display = ["created", "key", "title", "thumbnail", "duration", "type", "dateModify", "topic_eventID"]


admin.register(ListPlaylists)


@admin.register(Artists)
class Artists(admin.ModelAdmin):
    list_display = ["created", "artistId", "name", "shortLink", "imageUrl", "artist_eventID"]


admin.register(Artists)