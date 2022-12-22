from django.urls import path
from . import views

urlpatterns = [
    # path('topic/', views.GetListTopic.as_view()),
    path('video/moi-hot/', views.GetVideoMoiHot.as_view()),
    path('video/viet-nam/', views.GetVideoVietNam.as_view()),
    path('video/au-my/', views.GetVideoAuMy.as_view()),
    path('video/chau-a/', views.GetVideoChauA.as_view())
]