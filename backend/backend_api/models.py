from django.db import models
import datetime


class Car(models.Model):
    brand = models.CharField(max_length=250)
    model = models.CharField(max_length=200)
    manufacture_year = models.IntegerField()
    engine_power = models.IntegerField()
    fuel_type = models.CharField(max_length=200)
    price_per_day = models.DecimalField(max_digits=19, decimal_places=2)

    def __str__(self):
        return f'{self.brand} {self.model} | {self.manufacture_year} {self.engine_power} {self.fuel_type}'


class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=150)
    city = models.CharField(max_length=50)
    postal_code = models.CharField(max_length=6)
    street = models.CharField(max_length=250)
    street_number = models.CharField(max_length=10)
    flat_number = models.CharField(max_length=10)

    def __str__(self):
        return f'{self.first_name} {self.last_name} | {self.city} {self.postal_code} {self.street} {self.street_number}/{self.flat_number}'


class Rent(models.Model):
    customer = models.ForeignKey(Customer, on_delete=models.CASCADE)
    car = models.ForeignKey(Car, on_delete=models.CASCADE)
    start_date = models.DateField(auto_now_add=datetime.datetime.now())
    end_date = models.DateField()
    price = models.DecimalField(max_digits=19, decimal_places=2)

    def __str__(self):
        return f'Customer: {self.customer} Car: {self.car} Date: {self.start_date} - {self.end_date} Price: {self.price}'

