from django.contrib import admin
from .models import TopicShowCase, ShowCaseHome


# Register your models here.
@admin.register(TopicShowCase)
class TopicShowCase(admin.ModelAdmin):
    list_display = ["topic_name", "created_at"]


admin.register(TopicShowCase)


@admin.register(ShowCaseHome)
class ShowCaseHome(admin.ModelAdmin):
    list_display = ["title", "thumbnail", "url", "description", "order", "image_url", "topic_event", "created_at"]


# admin.register(ShowCaseHome)
