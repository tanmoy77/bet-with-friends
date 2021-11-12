from rest_framework import routers
from django.urls import path, include
from api import views

router = routers.DefaultRouter()
router.register(r'groups', views.GroupViewset)
router.register(r'events', views.EventViewset)

urlpatterns = [
    path('', include(router.urls)),
]