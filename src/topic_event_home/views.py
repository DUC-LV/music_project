from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .serializers import TopicEventsSerializers, ListPlaylistsSerializers, ArtistsSerializers
from .models import TopicEvents, ListPlaylists, Artists


# Create your views here.

@csrf_exempt
def list_topic(request):
    if request.method == 'GET':
        content1 = TopicEvents.objects.all()
        topicEvent = []
