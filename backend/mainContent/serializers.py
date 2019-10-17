from rest_framework import serializers
from .models import MainContent

class MainContentSerializer(serializers.ModelSerializer):
  class Meta:
    model = MainContent
    fields = ('__all__')
