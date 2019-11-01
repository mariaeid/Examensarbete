from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.generics import CreateAPIView
from .serializers import CartSerializer
from .models import Cart

class CartView(viewsets.ModelViewSet):
  serializer_class = CartSerializer
  queryset = Cart.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]

  def post(self,request):
    serializer = CartSerializer(data=request.data)
    print(serializer, type(serializer))
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
