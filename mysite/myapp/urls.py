from django.urls import path
from django.urls import path, include # new


from . import views

urlpatterns = [
    path('', views.index),
    path('suggestions/', views.suggestion_view),
    path('accounts/', include('django.contrib.auth.urls'))
]