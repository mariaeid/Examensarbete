from django.contrib import admin

from .models import EnvironmentalProject # add this

class EnvironmentalProjectAdmin(admin.ModelAdmin):  # add this
  list_display = ('title', 'intro', 'fullDescription', 'image') # add this

# Register your models here.
admin.site.register(EnvironmentalProject, EnvironmentalProjectAdmin) # add this
