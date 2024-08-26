from django.urls import path
from . import views

urlpatterns = [
    path('data/', views.data_view, name='data'),
    path('', views.home_view, name='home'),  # This will handle the root URL
]