from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from .models import Songs, ListTags, Artists, PlaylistSongs


# # Register your models here.
# @admin.register(PlayList)
# class PlaylistAdmin(admin.ModelAdmin):
#     def hash_id(self, obj):
#         if obj.id:
#             return PlayList.encode_hash_id(obj.id)
#
#     hash_id.short_description = "Hash id"
#
#     list_display = ["hash_id", "title", "thumbnail", "duration", "date_create", "description", "type", "created_at"]


@admin.register(Songs)
class Songs(admin.ModelAdmin):
    list_display = ["title", "thumbnail", "duration", "type", "date_release", "date_create", "description"]


@admin.register(ListTags)
class ListTags(MPTTModelAdmin):
    list_display = ["key", "name"]


@admin.register(Artists)
class Artists(admin.ModelAdmin):
    list_display = ["name", "short_link", "image_url", "artist_event"]


@admin.register(PlaylistSongs)
class PlaylistSongsAdmin(admin.ModelAdmin):
    list_display = ["song", "playlist"]
