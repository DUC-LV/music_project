from django.urls import path
from . import views

urlpatterns = [
    path('showcase/', views.GetShowCase.as_view()),
]