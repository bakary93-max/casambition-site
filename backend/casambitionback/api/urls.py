# api/urls.py

from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet, LoginView, add_project, send_contact_email

router = DefaultRouter()
router.register(r'items', ItemViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('login/', LoginView.as_view(), name='login'),
    path('add-project/', add_project, name='add_project'),
    path('contact/', send_contact_email, name='send_contact_email'),  # Note le '/' à la fin
]