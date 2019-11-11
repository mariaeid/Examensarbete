from django.contrib import admin

from .models import MainContent

class MainContentAdmin(admin.ModelAdmin):
  list_display = ('siteTitle', 'titlePart1', 'textPart1', 'titlePart2', 'textPart2', 'titlePart3', 'textPart3')

# Register your models here.
admin.site.register(MainContent, MainContentAdmin)
