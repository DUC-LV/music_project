from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views import View
from .models import Songs, ListTags, Artists, PlaylistSongs
from topic_event_home.models import ListPlaylists


# Create your views here.

class GetPlaylistDetail(View):
    def get(self, request, hash_id):
        playlist_id = ListPlaylists.decode_hash_id(hash_id)
        playlist = ListPlaylists.objects.filter(id=playlist_id).all()
        playlist_songs = PlaylistSongs.objects.filter(playlist_id=playlist_id).all().select_related('song')
        list_song = [pl_so.song for pl_so in playlist_songs]
        for pl in playlist:
            song_data = []
            for s in list_song:
                s_data = {
                    "key": s.get_hash_id(),
                    "title": s.title,
                    "thumbnail": s.thumbnail,
                    "duration": s.duration,
                    "type": s.type,
                }
                artists_data = []
                artists = Artists.objects.filter(artist_event_id=s.id).all()
                for art in artists:
                    artists_data.append({
                        "artistId": art.id,
                        "name": art.name,
                        "shortLink": art.short_link,
                        "imageUrl": art.image_url,
                        "date_release": s.date_release,
                        "date_create": s.date_create,
                        "description": s.description,
                    })

                s_data["artists"] = artists_data
                song_data.append(s_data)
            list_tag = []
            tag = ListTags.objects.all()
            for t in tag:
                if t.parent is None:
                    continue
                list_tag.append({
                    "group": t.parent.key,
                    "key": t.key,
                    "name": t.name
                })
            data_res = {
                "key": pl.get_hash_id(),
                "title": pl.title,
                "thumbnail": pl.thumbnail,
                "duration": pl.duration,
                # "date_create": pl.date_create,
                # "description": pl.description,
                "type": pl.type,
                "song": song_data,
                "tags": list_tag,
            }
            return JsonResponse(data_res, safe=False)
