from django.shortcuts import render
from rest_framework import viewsets, permissions
from rest_framework.generics import CreateAPIView
from django.http import Http404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import BuyerSerializer
from .models import Buyer

class BuyerView(viewsets.ModelViewSet):
  serializer_class = BuyerSerializer
  queryset = Buyer.objects.all()
  permission_classes = [
    permissions.AllowAny
  ]

  class BuyerList(APIView):

      def post(self,request):
        serializer = BuyerSerializer(data=request.data)
        print(serializer, type(serializer))
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        def put(self, request, pk, format=None):
            buyer = self.get_object(pk)
            serializer = BuyertSerializer(buyer, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        def delete(self, request, pk, format=None):
            buyer = self.get_object(pk)
            buyer.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)
