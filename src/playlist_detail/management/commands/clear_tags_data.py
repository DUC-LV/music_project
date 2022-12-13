from django.core.management.base import BaseCommand

from playlist_detail.models import ListTags


class Command(BaseCommand):
    def handle(self, *args, **options):
        try:
            ListTags.objects.all().delete()
        except Exception as e:
            print('Error:', e)
        self.stdout.write('[#] DONE!')