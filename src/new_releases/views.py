from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
from .models import Songs, Artists, SongRanking
from .serializers import SongsSerializers
import datetime


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


def _get_ranking_info(song_id):
    rankings = SongRanking.objects.filter(song_id=song_id).all()
    ranking_map = {}
    for rank in rankings:
        ranking_map[rank.week] = rank.ranking

    current_week = datetime.datetime.now().isocalendar()[1]
    rank_info = {
        "position": ranking_map.get(current_week),
        "oldPosition": ranking_map.get(current_week - 1),
        "highestPosition": min(ranking_map.values()),
        "totalWeekInRanked": len(ranking_map.keys())
    }
    return rank_info


class GetRankingNCT(View):
    def get(self, request):
        list_song = SongRanking.objects.all().select_related('song')
        data_res = []

        for sr in list_song:
            list_pl = sr.song
            ranking_info = _get_ranking_info(list_pl.id)
            song_data = {
                "key": list_pl.get_hash_id(),
                "title": list_pl.title,
                "thumbnail": list_pl.thumbnail,
                "dateRelease": list_pl.date_release,
                "dateCreate": list_pl.date_create,
                "position": ranking_info['position'],
                "oldPosition": ranking_info['oldPosition'],
                "highestPosition": ranking_info['highestPosition'],
                "totalWeekInRanked": ranking_info.get('totalWeekInRanked')
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
