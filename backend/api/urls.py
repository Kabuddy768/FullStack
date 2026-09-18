
from django.contrib import admin
from django.urls import path
from .views import *


from django.urls import path
from .views import greet

urlpatterns = [
    path('greet/', greet, name='greet'),
]
