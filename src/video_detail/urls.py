from django.urls import path
from . import views

urlpatterns = [
    path('video/<str:hash_id>/', views.GetVideoDetail.as_view())
]
