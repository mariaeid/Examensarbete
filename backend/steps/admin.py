from django.contrib import admin
from .models import Steps

class StepsAdmin(admin.ModelAdmin):
  list_display = ('number', 'title', 'description')

admin.site.register(Steps, StepsAdmin)
