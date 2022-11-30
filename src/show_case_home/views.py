from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from .models import ShowCaseHome
from .serializers import ShowCaseHomeSerializer


# Create your views here.
@csrf_exempt
def showcase(request):
    if request.method == 'GET':
        content = ShowCaseHome.objects.all()
        data = {
            "errorCode": 200,
            "message": "Successful.",
            "data": list(
                content.values("created", "title", "key", "thumbnail", "url", "description", "order", "imageUrl"))
        }
        return JsonResponse(data)
