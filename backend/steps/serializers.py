from rest_framework import serializers
from .models import Steps

# Render the Python class to JSON
class StepsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Steps
    fields = ('__all__')
