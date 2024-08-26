from django.contrib import admin
from .models import DataItem

class DataItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'name')  # Fields to display in the list view
    search_fields = ('name',)     # Fields to add search functionality

admin.site.register(DataItem, DataItemAdmin)