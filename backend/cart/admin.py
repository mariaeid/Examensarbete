from django.contrib import admin
from .models import Cart

class CartAdmin(admin.ModelAdmin):
  list_display = ('productId', 'buyerId')

admin.site.register(Cart, CartAdmin)
