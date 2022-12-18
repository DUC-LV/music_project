from django.urls import path
from . import views

urlpatterns = [
    path('topic/', views.GetListTopic.as_view()),
    path('playlist/playlist-moi/', views.GetPlayListMoi.as_view()),
    path('playlist/nhac-tre-moi/', views.GetNhacTreMoi.as_view()),
    path('playlist/pop-moi/', views.GetPopMoi.as_view()),
    path('playlist/nhac-han-moi/', views.GetNhacHanMoi.as_view())
]
