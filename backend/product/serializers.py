from rest_framework import serializers
from .models import Product

# Render the Python class to JSON
class ProductSerializer(serializers.ModelSerializer):
  class Meta:
    model = Product
    fields = ('__all__')
