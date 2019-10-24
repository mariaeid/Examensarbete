from django.shortcuts import render
from rest_framework import viewsets
from .serializers import BuyerSerializer
from .models import Buyer

class BuyerView(viewsets.ModelViewSet):
  serializer_class = BuyerSerializer
  queryset = Buyer.objects.all()
