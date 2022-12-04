from django.contrib import admin
from .models import Songs, Artists, SongRanking


# Register your models here.
@admin.register(Songs)
class Songs(admin.ModelAdmin):
    list_display = ["created_at", "title", "thumbnail", "duration", "date_release", "date_create"]


admin.register(Songs)


@admin.register(Artists)
class Artists(admin.ModelAdmin):
    list_display = ["created_at", "name", "short_link", "image_url", "artist_event"]


admin.register(Artists)


@admin.register(SongRanking)
class SongRanking(admin.ModelAdmin):
    list_display = ["song", "ranking", "week"]


admin.register(SongRanking)
