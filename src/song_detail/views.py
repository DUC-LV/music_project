from django.views import View
from django.http import JsonResponse
from .models import Songs, StreamUrl
from playlist_detail.models import Artists


# Create your views here.
class GetSongDetail(View):
    def get(self, request, hash_id):
        song_id = Songs.decode_hash_id(hash_id)
        song = Songs.objects.filter(id=song_id)
        for s in song:
            streamUrl_data = []
            streamUrl = StreamUrl.objects.filter(song_name=s.id).all()
            artists_data = []
            artists = Artists.objects.filter(artist_event_id=s.id).all()
            for art in artists:
                artists_data.append({
                    "artistId": art.id,
                    "name": art.name,
                    "shortLink": art.short_link,
                    "imageUrl": art.image_url,
                })
            for stream in streamUrl:
                streamUrl_data.append({
                    "quality": stream.quality,
                    "streamUrl": stream.stream_url,
                })
            data_res = {
                "key": s.get_hash_id(),
                "title": s.title,
                "thumbnail": s.thumbnail,
                "duration": s.duration,
                "type": s.type,
                "dateRelease": s.date_release,
                "dateCreate": s.date_create,
                "description": s.description,
                "artists": artists_data,
                "streamUrls": streamUrl_data,
            }
            return JsonResponse(data_res, safe=False)