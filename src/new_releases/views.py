from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
from .models import Songs, Artists
from .serializers import SongsSerializers


# Create your views here.
class GetNewReleases(View):
    def get(self, request):
        list_song = Songs.objects.all()
        data_res = []
        for list_pl in list_song:
            song_data = {
                "key": list_pl.get_hash_id(),
                "title": list_pl.title,
                "thumbnail": list_pl.thumbnail,
                "dateRelease": list_pl.date_release,
                "dateCreate": list_pl.date_create,
            }
            artists_data = []
            artists = Artists.objects.filter(artist_event_id=list_pl.id).all()
            for art in artists:
                artists_data.append({
                    "artistId": art.id,
                    "name": art.name,
                    "shortLink": art.short_link,
                    "imageUrl": art.image_url,
                })

            song_data["artists"] = artists_data
            data_res.append(song_data)

        return JsonResponse(data_res, safe=False)


class GetDetailNewReleases(View):
    def get(self, request, id):
        list_song = Songs.objects.filter(id=id)
        if not list_song.exists():
            return HttpResponse(status=404)
        list_song = list_song[0]
        if request.method == 'GET':
            serializer = SongsSerializers(list_song)
            return JsonResponse(serializer.data)
