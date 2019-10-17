from django.shortcuts import render

from rest_framework import viewsets          # add this
from .serializers import MainContentSerializer      # add this
from .models import MainContent                     # add this

class MainContentView(viewsets.ModelViewSet):       # add this
  serializer_class = MainContentSerializer          # add this
  queryset = MainContent.objects.all()              # add this
