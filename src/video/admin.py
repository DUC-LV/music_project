from django.contrib import admin
from .models import TopicVideos, Videos, Artists


# Register your models here.
@admin.register(TopicVideos)
class TopicVideos(admin.ModelAdmin):
    list_display = ["title", "created_at"]


admin.register(TopicVideos)


@admin.register(Videos)
class Videos(admin.ModelAdmin):
    list_display = ["title", "thumbnail", "duration", "type", "date_release", "date_create", "topic_video",
                    "created_at"]


admin.register(Videos)


@admin.register(Artists)
class Artists(admin.ModelAdmin):
    list_display = ["name", "short_link", "image_url", "artist_event", "created_at"]


admin.register(Artists)