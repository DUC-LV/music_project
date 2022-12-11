from django.urls import path
from . import views

urlpatterns = [
    path('list_topic/', views.GetListTopic.as_view()),
]
