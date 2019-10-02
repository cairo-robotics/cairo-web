from django.conf.urls import url
from core import views

urlpatterns = [
    url(r'^$', views.HomePageView.as_view(), name='home'),
    url(r'about', views.AboutPageView.as_view(), name='about'),
    url(r'pouring', views.PouringTaskPageView.as_view(), name='pouring'),
    url(r'placement', views.PlacementTaskPageView.as_view(), name='placement'),
    url(r'perimeter', views.PerimeterTaskPageView.as_view(), name='perimeter'),
]