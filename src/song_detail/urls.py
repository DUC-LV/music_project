from django.urls import path
from . import views

urlpatterns = [
    path('music/<str:hash_id>/', views.GetSongDetail.as_view())
]