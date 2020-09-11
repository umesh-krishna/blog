from rest_framework import serializers
from . import models


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'first_name',
            'last_name',
        )
        model = models.User
