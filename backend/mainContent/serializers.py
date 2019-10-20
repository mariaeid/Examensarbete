from rest_framework import serializers
from .models import MainContent

# Render the Python class to JSON
class MainContentSerializer(serializers.ModelSerializer):
  class Meta:
    model = MainContent
    fields = ('__all__')
