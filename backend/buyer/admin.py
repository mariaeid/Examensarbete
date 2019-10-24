from django.contrib import admin
from .models import Buyer

class BuyerAdmin(admin.ModelAdmin):
  list_display = ('first_name', 'last_name', 'street_address', 'zip_code', 'city', 'phone', 'user_name')

# Register your models here.
admin.site.register(Buyer, BuyerAdmin)
