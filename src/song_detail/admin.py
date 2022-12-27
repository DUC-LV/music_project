from django.contrib import admin
from .models import *


# Register your models here.
@admin.register(StreamUrl)
class StreamUrl(admin.ModelAdmin):
    list_display = ["quality", "stream_url", "song_name"]
