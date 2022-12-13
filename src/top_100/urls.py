from django.urls import path
from . import views

urlpatterns = [
    path('top100/', views.GetTop100.as_view()),
]
