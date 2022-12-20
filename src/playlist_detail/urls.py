from django.urls import path
from . import views

urlpatterns = [
    path('playlist/<str:hash_id>/', views.GetPlaylistDetail.as_view()),
    path('music/moi-hot/', views.GetSongMoiHot.as_view()),
    path('music/viet-nam/', views.GetSongVietNam.as_view()),
    path('music/au-my/', views.GetSongAuMy.as_view()),
    path('music/han-quoc/', views.GetSongHanQuoc.as_view()),
]
