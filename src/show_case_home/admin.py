from django.contrib import admin
from .models import ShowCaseHome
from guardian.admin import GuardedModelAdmin


# Register your models here.
@admin.register(ShowCaseHome)
class ShowCaseHome(GuardedModelAdmin):
    list_display = ["created", "title", "key", "thumbnail", "url", "description", "order", "imageUrl"]


admin.register(ShowCaseHome)
