from django.contrib import admin
from .models import Steps

class StepsAdmin(admin.ModelAdmin):
  list_display = ('number', 'title', 'description', 'icon')

admin.site.register(Steps, StepsAdmin)
