from django.contrib import admin
from .models import ListTop100, Artists


# Register your models here.
@admin.register(ListTop100)
class ListTop100(admin.ModelAdmin):
    list_display = ["created_at", "title", "thumbnail", "duration", "type", "date_modify", "date_create"]


admin.register(ListTop100)


@admin.register(Artists)
class Artists(admin.ModelAdmin):
    list_display = ["created_at", "name", "short_link", "image_url", "artist_event"]


admin.register(Artists)
