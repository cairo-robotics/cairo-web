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

# AR4LfD Pages
class AR4LFDAboutPageView(BaseTemplateView):
    template_name = "ar4lfd/about_ar4lfd.html"


class AR4LFDPouringTaskPageView(BaseTemplateView):
    template_name = "ar4lfd/pouring.html"


class AR4LFDPlacementTaskPageView(BaseTemplateView):
    template_name = "ar4lfd/placement.html"


class AR4LFDPerimeterTaskPageView(BaseTemplateView):
    template_name = "ar4lfd/perimeter.html"


class AR4LFDCubbyTaskPageView(BaseTemplateView):
    template_name = "ar4lfd/cubby.html"

# CCLfD Motion Planning Pages

class CCLfDMPPouringTaskPageView(BaseTemplateView):
    template_name = "cclfdmp/pouring.html"


class CCLfDMPGlueTaskPageView(BaseTemplateView):
    template_name = "cclfdmp/glue.html"


class CCLfDMPPenInHoleTaskPageView(BaseTemplateView):
    template_name = "cclfdmp/peginhole.html"

# IPD Relax
class IPDRelaxAboutPageView(BaseTemplateView):
    template_name = "ipdrelax/ipdrelax_about.html"

class IPDRelaxPouringTaskPageView(BaseTemplateView):
    template_name = "ipdrelax/pouring.html"