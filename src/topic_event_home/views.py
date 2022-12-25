from django.http import JsonResponse
from django.views import View
from .models import TopicEvents, ListPlaylists, Artists


# Create your views here.

class GetListTopic(View):
    @staticmethod
    def get(request):
        all_topics = TopicEvents.objects.filter(group_name__in=(
        'Giáng Sinh 2022 ☃️_Merry Christmas 2022 ☃️','World Cup 2022_World Cup 2022','Giáng Sinh Tuần Này 🎄_Christmas Week 🎄'))
        topic_ids = [tp.id for tp in all_topics]
        list_playlists = ListPlaylists.objects.filter(topic_event_id__in=topic_ids).all()
        topic_playlists_map = {}
        for playlist in list_playlists:
            tp_pl = topic_playlists_map.get(playlist.topic_event_id, None)
            artists_data = []
            artists = Artists.objects.filter(artist_event_id=playlist.id).all()
            for art in artists:
                artists_data.append({
                    "artistId": art.id,
                    "name": art.name,
                    "shortLink": art.short_link,
                    "imageUrl": art.image_url
                })
            playlist_dict = {
                "key": playlist.get_hash_id(),
                "title": playlist.title,
                "thumbnail": playlist.thumbnail,
                "duration": playlist.duration_to_string(),
                "type": playlist.type,
                "dateModify": playlist.date_modify,
                "dateCreate": int(playlist.created_at.timestamp()),
                "description": playlist.description,
                "artists": artists_data
            }
            if tp_pl is None:
                topic_playlists_map[playlist.topic_event_id] = [playlist_dict]
            else:
                topic_playlists_map[playlist.topic_event_id].append(playlist_dict)

        data_res = []
        for tp in all_topics:
            data_res.append({
                "groupName": tp.group_name,
                "listPlaylist": topic_playlists_map[tp.id]
            })

        return JsonResponse(data_res, safe=False)


class GetPlayListMoi(View):
    def get(self, request):
        all_topics = TopicEvents.objects.filter(group_name='playlist-moi')
        topic_ids = [tp.id for tp in all_topics]
        list_playlists = ListPlaylists.objects.filter(topic_event_id__in=topic_ids).all()
        topic_playlists_map = {}
        for playlist in list_playlists:
            tp_pl = topic_playlists_map.get(playlist.topic_event_id, None)
            artists_data = []
            artists = Artists.objects.filter(artist_event_id=playlist.id).all()
            for art in artists:
                artists_data.append({
                    "artistId": art.id,
                    "name": art.name,
                    "shortLink": art.short_link,
                    "imageUrl": art.image_url
                })
            playlist_dict = {
                "key": playlist.get_hash_id(),
                "title": playlist.title,
                "thumbnail": playlist.thumbnail,
                "duration": playlist.duration_to_string(),
                "type": playlist.type,
                "dateModify": playlist.date_modify,
                "dateCreate": int(playlist.created_at.timestamp()),
                "artists": artists_data
            }
            if tp_pl is None:
                topic_playlists_map[playlist.topic_event_id] = [playlist_dict]
            else:
                topic_playlists_map[playlist.topic_event_id].append(playlist_dict)

        data_res = {}
        for tp in all_topics:
            data_res = {
                "groupName": tp.group_name,
                "data": topic_playlists_map[tp.id]
            }
        return JsonResponse(data_res, safe=False)


class GetNhacTreMoi(View):
    def get(self, request):
        all_topics = TopicEvents.objects.filter(group_name='nhac-tre-moi')
        topic_ids = [tp.id for tp in all_topics]
        list_playlists = ListPlaylists.objects.filter(topic_event_id__in=topic_ids).all()
        topic_playlists_map = {}
        for playlist in list_playlists:
            tp_pl = topic_playlists_map.get(playlist.topic_event_id, None)
            artists_data = []
            artists = Artists.objects.filter(artist_event_id=playlist.id).all()
            for art in artists:
                artists_data.append({
                    "artistId": art.id,
                    "name": art.name,
                    "shortLink": art.short_link,
                    "imageUrl": art.image_url
                })
            playlist_dict = {
                "key": playlist.get_hash_id(),
                "title": playlist.title,
                "thumbnail": playlist.thumbnail,
                "duration": playlist.duration_to_string(),
                "type": playlist.type,
                "dateModify": playlist.date_modify,
                "dateCreate": int(playlist.created_at.timestamp()),
                "artists": artists_data
            }
            if tp_pl is None:
                topic_playlists_map[playlist.topic_event_id] = [playlist_dict]
            else:
                topic_playlists_map[playlist.topic_event_id].append(playlist_dict)

        data_res = {}
        for tp in all_topics:
            data_res = {
                "groupName": tp.group_name,
                "data": topic_playlists_map[tp.id]
            }

        return JsonResponse(data_res, safe=False)


class GetPopMoi(View):
    def get(self, request):
        all_topics = TopicEvents.objects.filter(group_name='pop-moi')
        topic_ids = [tp.id for tp in all_topics]
        list_playlists = ListPlaylists.objects.filter(topic_event_id__in=topic_ids).all()
        topic_playlists_map = {}
        for playlist in list_playlists:
            tp_pl = topic_playlists_map.get(playlist.topic_event_id, None)
            artists_data = []
            artists = Artists.objects.filter(artist_event_id=playlist.id).all()
            for art in artists:
                artists_data.append({
                    "artistId": art.id,
                    "name": art.name,
                    "shortLink": art.short_link,
                    "imageUrl": art.image_url
                })
            playlist_dict = {
                "key": playlist.get_hash_id(),
                "title": playlist.title,
                "thumbnail": playlist.thumbnail,
                "duration": playlist.duration_to_string(),
                "type": playlist.type,
                "dateModify": playlist.date_modify,
                "dateCreate": int(playlist.created_at.timestamp()),
                "artists": artists_data
            }
            if tp_pl is None:
                topic_playlists_map[playlist.topic_event_id] = [playlist_dict]
            else:
                topic_playlists_map[playlist.topic_event_id].append(playlist_dict)

        data_res = {}
        for tp in all_topics:
            data_res = {
                "groupName": tp.group_name,
                "data": topic_playlists_map[tp.id]
            }

        return JsonResponse(data_res, safe=False)


class GetNhacHanMoi(View):
    def get(self, request):
        all_topics = TopicEvents.objects.filter(group_name='nhac-han-moi')
        topic_ids = [tp.id for tp in all_topics]
        list_playlists = ListPlaylists.objects.filter(topic_event_id__in=topic_ids).all()
        topic_playlists_map = {}
        for playlist in list_playlists:
            tp_pl = topic_playlists_map.get(playlist.topic_event_id, None)
            artists_data = []
            artists = Artists.objects.filter(artist_event_id=playlist.id).all()
            for art in artists:
                artists_data.append({
                    "artistId": art.id,
                    "name": art.name,
                    "shortLink": art.short_link,
                    "imageUrl": art.image_url
                })
            playlist_dict = {
                "key": playlist.get_hash_id(),
                "title": playlist.title,
                "thumbnail": playlist.thumbnail,
                "duration": playlist.duration_to_string(),
                "type": playlist.type,
                "dateModify": playlist.date_modify,
                "dateCreate": int(playlist.created_at.timestamp()),
                "artists": artists_data
            }
            if tp_pl is None:
                topic_playlists_map[playlist.topic_event_id] = [playlist_dict]
            else:
                topic_playlists_map[playlist.topic_event_id].append(playlist_dict)

        data_res = {}
        for tp in all_topics:
            data_res = {
                "groupName": tp.group_name,
                "data": topic_playlists_map[tp.id]
            }

        return JsonResponse(data_res, safe=False)