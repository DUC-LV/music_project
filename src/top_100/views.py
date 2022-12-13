from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
from .models import ListTop100, Artists


# Create your views here.

class GetTop100(View):
    def get(self, request):
        list_top100 = ListTop100.objects.all()
        data_res = []
        for ls in list_top100:
            song_data = {
                "key": ls.get_hash_id(),
                "title": ls.title,
                "thumbnail": ls.thumbnail,
                "dateCreate": ls.date_create,
                "dateModify": ls.date_modify,
            }
            artists_data = []
            artists = Artists.objects.filter(artist_event_id=ls.id).all()
            for art in artists:
                artists_data.append({
                    "artistId": art.id,
                    "name": art.name,
                    "shortLink": art.short_link,
                    "imageUrl": art.image_url,
                })

            song_data["artists"] = artists_data
            data_res.append(song_data)

        return JsonResponse({
            "status": "success",
            "code": "200",
            "top100": data_res
        }, safe=False)
