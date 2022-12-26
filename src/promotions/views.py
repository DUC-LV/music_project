from django.http import JsonResponse
from django.views import View
from .models import ShowCaseHome, TopicShowCase


# Create your views here.
class GetShowCase(View):
    def get(self, request):
        topic = TopicShowCase.objects.filter(topic_name="promotions_26/12/2022").all()
        topic_ids = [tp.id for tp in topic]
        list_playlist = ShowCaseHome.objects.filter(topic_event_id__in=topic_ids).all()
        topic_playlist_map = {}
        for sc in list_playlist:
            tp_vd = topic_playlist_map.get(sc.topic_event_id, None)
            data = {
                "key": sc.get_hash_id(),
                "title": sc.title,
                "thumbnail": sc.thumbnail,
                "url": sc.url,
                "description": sc.description,
                "order": sc.order,
                "imageUrl": sc.image_url,
            }
            if tp_vd is None:
                topic_playlist_map[sc.topic_event_id] = [data]
            else:
                topic_playlist_map[sc.topic_event_id].append(data)
        data_res = {}
        for sc in topic:
            data_res = {
                "title": "noel_2022",
                "data": topic_playlist_map[sc.id]
            }
        return JsonResponse(data_res, safe=False)
