from django.http import JsonResponse
from django.views import View
from .models import TopicVideos, Videos, Artists


# Create your views here.
class GetVideoMoiHot(View):
    def get(self, request):
        all_videos = TopicVideos.objects.filter(title="video_moi_hot").all()
        topic_ids = [tp.id for tp in all_videos]
        list_videos = Videos.objects.filter(topic_video_id__in=topic_ids).all()
        topic_videos_map = {}
        for video in list_videos:
            tp_vd = topic_videos_map.get(video.topic_video_id, None)

            artists_data = []
            artists = Artists.objects.filter(artist_event_id=video.id).all()
            for art in artists:
                artists_data.append({
                    "artistId": art.id,
                    "name": art.name,
                    "shortLink": art.short_link,
                    "imageUrl": art.image_url
                })
            video_data = {
                "key": video.get_hash_id(),
                "title": video.title,
                "thumbnail": video.thumbnail,
                "duration": video.duration,
                "type": video.type,
                "dateRelease": video.date_release,
                "dateCreate": video.date_create,
                "artists": artists_data,
            }
            if tp_vd is None:
                topic_videos_map[video.topic_video_id] = [video_data]
            else:
                topic_videos_map[video.topic_video_id].append(video_data)
        data_res = {}
        for vd in all_videos:
            data_res = {
                "title": "video_moi_hot",
                "data": topic_videos_map[vd.id]
            }
        return JsonResponse(data_res, safe=False)


class GetVideoVietNam(View):
    def get(self, request):
        all_videos = TopicVideos.objects.filter(title="video_viet_nam").all()
        topic_ids = [tp.id for tp in all_videos]
        list_videos = Videos.objects.filter(topic_video_id__in=topic_ids).all()
        data_res = []
        for video in list_videos:
            video_data = {
                "key": video.get_hash_id(),
                "title": video.title,
                "thumbnail": video.thumbnail,
                "duration": video.duration,
                "type": video.type,
                "dateRelease": video.date_release,
                "dateCreate": video.date_create,
            }
            artists_data = []
            artists = Artists.objects.filter(artist_event_id=video.id).all()
            for art in artists:
                artists_data.append({
                    "artistId": art.id,
                    "name": art.name,
                    "shortLink": art.short_link,
                    "imageUrl": art.image_url
                })
            video_data["artists"] = artists_data
            data_res.append({
                "title": "video_viet_nam",
                "data": video_data,
            })

            return JsonResponse(data_res, safe=False)


class GetVideoAuMy(View):
    def get(self, request):
        all_videos = TopicVideos.objects.filter(title="video_au_my").all()
        topic_ids = [tp.id for tp in all_videos]
        list_videos = Videos.objects.filter(topic_video_id__in=topic_ids).all()
        data_res = []
        for video in list_videos:
            video_data = {
                "key": video.get_hash_id(),
                "title": video.title,
                "thumbnail": video.thumbnail,
                "duration": video.duration,
                "type": video.type,
                "dateRelease": video.date_release,
                "dateCreate": video.date_create,
            }
            artists_data = []
            artists = Artists.objects.filter(artist_event_id=video.id).all()
            for art in artists:
                artists_data.append({
                    "artistId": art.id,
                    "name": art.name,
                    "shortLink": art.short_link,
                    "imageUrl": art.image_url
                })
            video_data["artists"] = artists_data
            data_res.append({
                "title": "video_au_my",
                "data": video_data,
            })

            return JsonResponse(data_res, safe=False)


class GetVideoChauA(View):
    def get(self, request):
        all_videos = TopicVideos.objects.filter(title="video_chau_a").all()
        topic_ids = [tp.id for tp in all_videos]
        list_videos = Videos.objects.filter(topic_video_id__in=topic_ids).all()
        data_res = []
        for video in list_videos:
            video_data = {
                "key": video.get_hash_id(),
                "title": video.title,
                "thumbnail": video.thumbnail,
                "duration": video.duration,
                "type": video.type,
                "dateRelease": video.date_release,
                "dateCreate": video.date_create,
            }
            artists_data = []
            artists = Artists.objects.filter(artist_event_id=video.id).all()
            for art in artists:
                artists_data.append({
                    "artistId": art.id,
                    "name": art.name,
                    "shortLink": art.short_link,
                    "imageUrl": art.image_url
                })
            video_data["artists"] = artists_data
            data_res.append({
                "title": "video_chau_a",
                "data": video_data,
            })

            return JsonResponse(data_res, safe=False)
