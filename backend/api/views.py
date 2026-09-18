from django.shortcuts import render
from rest_framework import viewsets,permissions
from .serializers import *
from .models import *
from rest_framework.response import Response


# Create your views here.

class CountryViewSet (viewsets.ViewSet):
    permission_classes= [permissions.AllowAny]
    query =Country.objects.all()
    serializers_class =CountrySerializer

    def list(self,request):
        queryset =Country.objects.all()
        serializer = self.serializers_class(queryset, many= True)
        return Response(serializer.data)
    
    

class LeagueViewSet (viewsets.ViewSet):
    permission_classes= [permissions.AllowAny]
    query =Country.objects.all()
    serializers_class =LeagueSerializer

    def list(self,request):
        queryset =League.objects.all()
        serializer = self.serializers_class(queryset, many= True)
        return Response(serializer.data)
    


class CharacteristicViewSet (viewsets.ViewSet):
    permission_classes= [permissions.AllowAny]
    query =Country.objects.all()
    serializers_class =CharacteristicSerializer

    def list(self,request):
        queryset =Characteristic.objects.all()
        serializer = self.serializers_class(queryset, many= True)
        return Response(serializer.data)
    

from django.http import JsonResponse

def greet(request):
    name = request.GET.get('name', 'World')
    return JsonResponse({'message': f'Hello, {name}'})