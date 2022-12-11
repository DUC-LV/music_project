from django.contrib import admin
from .models import ListTopic


# Register your models here.
@admin.register(ListTopic)
class ListTopic(admin.ModelAdmin):
    list_display = ["created_at", "title", "description", "cover_image", "thumbnail"]


admin.register(ListTopic)
