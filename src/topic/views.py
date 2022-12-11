from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
from .models import ListTopic


# Create your views here.

class GetListTopic(View):
    def get(self, request):
        topics = ListTopic.objects.all()
        data = []
        for tp in topics:
            data.append({
                "key": tp.get_hash_id(),
                "title": tp.title,
                "description": tp.description,
                "coverImage": tp.cover_image,
                "thumbnail": tp.thumbnail,
            })
        return JsonResponse({
            "status": "success",
            "code": "200",
            "data": data
        }, safe=False)
