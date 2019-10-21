from django.shortcuts import render
from rest_framework import viewsets, permissions
from .serializers import StepsSerializer
from .models import Steps

class StepsView(viewsets.ModelViewSet):
  serializer_class = StepsSerializer
  queryset = Steps.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]
