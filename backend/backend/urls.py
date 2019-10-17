from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from environmentalProject import views as environmentalProjectViews
from mainContent import views as mainContentViews
from steps import views as stepsViews
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'environmentalProjects', environmentalProjectViews.EnvironmentalProjectView, 'environmentalProject')
router.register(r'mainContent', mainContentViews.MainContentView, 'mainContent')
router.register(r'steps', stepsViews.StepsView, 'steps')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
