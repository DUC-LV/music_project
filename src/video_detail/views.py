from django.views import View
from django.http import JsonResponse
from .models import Videos, StreamUrl
from video.models import Artists


# Create your views here.
class GetVideoDetail(View):
    def get(self, request, hash_id):
        video_id = Videos.decode_hash_id(hash_id)
        video = Videos.objects.filter(id=video_id)
        for v in video:
            streamUrl_data = []
            streamUrl = StreamUrl.objects.filter(video_name=v.id).all()
            artists_data = []
            artists = Artists.objects.filter(artist_event_id=v.id).all()
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
                "key": v.get_hash_id(),
                "title": v.title,
                "thumbnail": v.thumbnail,
                "duration": v.duration,
                "type": v.type,
                "dateRelease": v.date_release,
                "dateCreate": v.date_create,
                "artists": artists_data,
                "streamUrls": streamUrl_data,
            }
            return JsonResponse(data_res, safe=False)
