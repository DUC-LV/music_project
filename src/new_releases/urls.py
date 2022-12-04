from django.urls import path
from . import views

urlpatterns = [
    path('new_release/', views.GetNewReleases.as_view()),
    path('new_release/<int:id>/', views.GetDetailNewReleases.as_view()),
    path('ranking/', views.GetRankingNCT.as_view())
]
