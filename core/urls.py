from django.conf.urls import url
from core import views

urlpatterns = [
    url(r'^$', views.HomePageView.as_view(), name='home'),
    url(r'about_acclfd', views.AboutACCLFDPageView.as_view(), name='about_acclfd'),
    url(r'ar4lfd_about', views.AR4LFDAboutPageView.as_view(), name='ar4lfd_about'),
    url(r'ar4lfd_pouring', views.AR4LFDPouringTaskPageView.as_view(), name='ar4lfd_pouring'),
    url(r'ar4lfd_placement', views.AR4LFDPlacementTaskPageView.as_view(), name='ar4lfd_placement'),
    url(r'ar4lfd_perimeter', views.AR4LFDPerimeterTaskPageView.as_view(), name='ar4lfd_perimeter'),
    url(r'ar4lfd_cubby', views.AR4LFDCubbyTaskPageView.as_view(), name='ar4lfd_cubby'),
    url(r'cclfdmp_pouring', views.CCLfDMPPouringTaskPageView.as_view(), name='cclfdmp_pouring'),
    url(r'cclfdmp_glue', views.CCLfDMPGlueTaskPageView.as_view(), name='cclfdmp_glue'),
    url(r'cclfdmp_peginhole', views.CCLfDMPPenInHoleTaskPageView.as_view(), name='cclfdmp_peginhole')
]
