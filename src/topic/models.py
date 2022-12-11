from django.db import models
from hashids import Hashids
from django.utils.duration import duration_string


# Create your models here.
def get_hash_ids_default():
    return Hashids(min_length=12)


class BaseModel(models.Model):
    class Meta:
        abstract = True

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

    _HASH_IDS = get_hash_ids_default()

    @classmethod
    def encode_hash_id(cls, from_id):
        return cls._HASH_IDS.encode(from_id)

    @classmethod
    def decode_hash_id(cls, from_id):
        return cls._HASH_IDS.decode(from_id)[0]

    def get_hash_id(self):
        return self.encode_hash_id(self.id)


class ListTopic(BaseModel):
    class Meta:
        ordering = ['created_at']

    title = models.CharField(max_length=200)
    description = models.TextField()
    cover_image = models.CharField(max_length=200)
    thumbnail = models.CharField(max_length=300)

    def __str__(self):
        return self.title
