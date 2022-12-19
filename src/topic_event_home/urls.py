from django.urls import path
from . import views

urlpatterns = [
    path('topic/', views.GetListTopic.as_view()),
    path('playlist/moi-hot/', views.GetPlayListMoi.as_view()),
    path('playlist/viet-nam/', views.GetNhacTreMoi.as_view()),
    path('playlist/au-my/', views.GetPopMoi.as_view()),
    path('playlist/chau-a/', views.GetNhacHanMoi.as_view())
]
