from django.shortcuts import render
from rest_framework import generics
from . import models, serializers


class UserListAPI(generics.ListAPIView):
    queryset = models.User.objects.all()
    serializer_class = serializers.UserSerializer


