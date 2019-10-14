from rest_framework import serializers
from .models import EnvironmentalProject

class EnvironmentalProjectSerializer(serializers.ModelSerializer):
  class Meta:
    model = EnvironmentalProject
    fields = ('__all__')
