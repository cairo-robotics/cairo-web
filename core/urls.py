from django.conf.urls import url
from core import views

urlpatterns = [
    url(r'^$', views.HomePageView.as_view(), name='home')
]

   