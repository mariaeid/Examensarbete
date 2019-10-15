from django.contrib import admin
from django.urls import path, include                 # add this
from rest_framework import routers                    # add this
from environmentalProject import views                            # add this
from django.conf import settings # new
from django.conf.urls.static import static # new

router = routers.DefaultRouter()                      # add this
router.register(r'environmentalProjects', views.EnvironmentalProjectView, 'environmentalProject')     # add this

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
