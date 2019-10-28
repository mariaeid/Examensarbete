from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.generics import CreateAPIView
from .serializers import BuyerSerializer
from .models import Buyer

class BuyerView(viewsets.ModelViewSet):
  serializer_class = BuyerSerializer
  queryset = Buyer.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]

  def post(self,request):
    serializer = BuyerSerializer(data=request.data)
    print(serializer, type(serializer))
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
