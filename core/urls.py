from django.conf.urls import url
from core import views

urlpatterns = [
    url(r'^$', views.HomePageView.as_view(), name='home'),
    url(r'about_acclfd', views.AboutACCLFDPageView.as_view(), name='about_acclfd'),
    url(r'about_ar4lfd', views.AboutAR4LFDPageView.as_view(), name='about_ar4lfd'),
    url(r'pouring', views.PouringTaskPageView.as_view(), name='pouring'),
    url(r'placement', views.PlacementTaskPageView.as_view(), name='placement'),
    url(r'perimeter', views.PerimeterTaskPageView.as_view(), name='perimeter'),
    url(r'cubby', views.CubbyTaskPageView.as_view(), name='cubby')
]