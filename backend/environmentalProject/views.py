from django.shortcuts import render
from rest_framework import viewsets          # add this
from .serializers import EnvironmentalProjectSerializer      # add this
from .models import EnvironmentalProject                     # add this

class EnvironmentalProjectView(viewsets.ModelViewSet):       # add this
  serializer_class = EnvironmentalProjectSerializer          # add this
  queryset = EnvironmentalProject.objects.all()              # add this
