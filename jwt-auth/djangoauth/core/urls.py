from django.urls import path
from .views import ProtectedDataApi

urlpatterns = [
    path('test/auth/', ProtectedDataApi.as_view())
]
