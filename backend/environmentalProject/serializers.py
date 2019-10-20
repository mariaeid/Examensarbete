from rest_framework import serializers
from .models import EnvironmentalProject

# Render the Python class to JSON
class EnvironmentalProjectSerializer(serializers.ModelSerializer):
  class Meta:
    model = EnvironmentalProject
    fields = ('__all__')
