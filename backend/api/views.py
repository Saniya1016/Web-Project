from django.http import JsonResponse
from django.shortcuts import render
from .models import DataItem  # Import your model

def data_view(request):
    data = list(DataItem.objects.values('id', 'name'))  # Adjust fields as needed
    return JsonResponse(data, safe=False)

def home_view(request):
    return render(request, 'home.html')  # Create a home.html template in your templates directory