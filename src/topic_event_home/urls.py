from django.urls import path
from . import views

urlpatterns = [
    path('topic/', views.list_topic),
]