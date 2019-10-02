from django.shortcuts import render
from django.views.generic import TemplateView # Import TemplateView


class HomePageView(TemplateView):
    template_name = "home.html"


class AboutPageView(TemplateView):
    template_name = "about.html"


class PouringTaskPageView(TemplateView):
    template_name = "pouring.html"


class PlacementTaskPageView(TemplateView):
    template_name = "placement.html"


class PerimeterTaskPageView(TemplateView):
    template_name = "perimeter.html"
