from django.contrib import admin
from .models import TopicEvents, ListPlaylists, Artists


@admin.register(TopicEvents)
class TopicEvents(admin.ModelAdmin):
    list_display = ["created_at", "group_name"]


admin.register(ListPlaylists)


@admin.register(ListPlaylists)
class ListPlaylists(admin.ModelAdmin):
    list_display = ["created_at", "title", "thumbnail", "duration", "type", "date_modify", "topic_event", "description"]


admin.register(ListPlaylists)


@admin.register(Artists)
class Artists(admin.ModelAdmin):
    list_display = ["created_at", "name", "short_link", "image_url", "artist_event"]


admin.register(Artists)
