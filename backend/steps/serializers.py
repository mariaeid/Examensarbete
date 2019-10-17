from rest_framework import serializers
from .models import Steps

class StepsSerializer(serializers.ModelSerializer):
  class Meta:
    model = Steps
    fields = ('__all__')
