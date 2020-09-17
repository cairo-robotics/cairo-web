from django.conf import settings
from django.shortcuts import render
from django.views.generic import TemplateView  # Import TemplateView


class BaseTemplateView(TemplateView):

    def get_context_data(self, *args, **kwargs):
        context = super(BaseTemplateView, self).get_context_data(
            *args, **kwargs)
        context['ROSBRIDGE_WS_URL'] = settings.ROSBRIDGE_WS_URL
        return context


class HomePageView(BaseTemplateView):
    template_name = "home.html"


class AboutACCLFDPageView(BaseTemplateView):
    template_name = "about_acclfd.html"


class AboutAR4LFDPageView(BaseTemplateView):
    template_name = "about_ar4lfd.html"


class PouringTaskPageView(BaseTemplateView):
    template_name = "pouring.html"


class PlacementTaskPageView(BaseTemplateView):
    template_name = "placement.html"


class PerimeterTaskPageView(BaseTemplateView):
    template_name = "perimeter.html"


class CubbyTaskPageView(BaseTemplateView):
    template_name = "cubby.html"
