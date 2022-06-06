from django.shortcuts import render
from .models import Car, Customer, Rent
from .serializers import CarSerializer, CustomerSerializer, RentSerializer
from rest_framework import viewsets


class CarViewSet(viewsets.ModelViewSet):
    serializer_class = CarSerializer
    queryset = Car.objects.all()


class CustomerViewSet(viewsets.ModelViewSet):
    serializer_class = CustomerSerializer
    queryset = Customer.objects.all()


class RentViewSet(viewsets.ModelViewSet):
    serializer_class = RentSerializer
    queryset = Rent.objects.all()
