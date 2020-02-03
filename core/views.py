from django.shortcuts import render
from django.views.generic import TemplateView # Import TemplateView


class HomePageView(TemplateView):
    template_name = "home.html"


class AboutACCLFDPageView(TemplateView):
    template_name = "about_acclfd.html"


class AboutAR4LFDPageView(TemplateView):
    template_name = "about_ar4lfd.html"


class PouringTaskPageView(TemplateView):
    template_name = "pouring.html"


class PlacementTaskPageView(TemplateView):
    template_name = "placement.html"


class PerimeterTaskPageView(TemplateView):
    template_name = "perimeter.html"


class CubbyTaskPageView(TemplateView):
    template_name = "cubby.html"
