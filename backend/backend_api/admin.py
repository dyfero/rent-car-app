from django.contrib import admin
from .models import Car, Customer, Rent


class CustomerInline(admin.TabularInline):
    model = Customer


class CarInline(admin.TabularInline):
    model = Car


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    list_display = ['first_name', 'last_name', 'city', 'postal_code', 'street', 'street_number', 'flat_number']


@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ['brand', 'model', 'manufacture_year', 'engine_power', 'fuel_type', 'price_per_day']


@admin.register(Rent)
class RentAdmin(admin.ModelAdmin):
    list_display = ['customer', 'car', 'start_date', 'end_date', 'price']
