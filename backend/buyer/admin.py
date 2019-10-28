from django.contrib import admin
from .models import Buyer

class BuyerAdmin(admin.ModelAdmin):
  list_display = ('firstName', 'lastName', 'streetAddress', 'zipCode', 'city', 'phone', 'username')

# Register your models here.
admin.site.register(Buyer, BuyerAdmin)
